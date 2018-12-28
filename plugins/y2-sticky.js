/**
 * This directive purpose is to set a target element to sticky in ALL BROWSERS
 * newer browsers will get the position: sticky; from the css
 * older browser will get a position: fixed that is changed when the page is scrolled (using ie-sticky.js)
 * 
 * to use:
 * <target-element v-y2-sticky="{top: Number, parentSelector: String}"></target-element>
 * top: the number of pixels the sticky will be from the top of the page
 * parentSelector(optional): the css selector of the container (examples: '.my-container', '[data-container="sticky"]', '#stickyContainer')
 *                           if given the sticky element will stop at the bottom of this container
 *                           NOTE: the container must be one of the target-element's parent elements
 */

import Vue from 'vue';
import axios from 'axios';

Vue.directive('y2-sticky', {
    bind: async function (el, bindings, vnode) {
        let useBrowserSticky = (vnode && vnode.context && vnode.context.$store.state.useSticky || false);
        let top = (bindings && bindings.value && bindings.value.top) ? bindings.value.top : 0;
        if (useBrowserSticky) {
            el.style.position = 'sticky';
            el.style.top = `${top}px`;
        } else {
            // append script
            if (typeof window.waitForStickyIE === 'undefined') {
                window.waitForStickyIE = {};
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = '/scripts/ie-sticky.min.js';
                document.getElementsByTagName('head')[0].appendChild(script);  
            }
            // promise that will wait for the sticky script to load
            const waitForScript = new Promise((resolve, reject) => {
                let compId = vnode.context._uid, count = 0;
                window.waitForStickyIE[compId] = (window.waitForStickyIE[compId]) ? window.waitForStickyIE[compId] : [];
                let intervl = setInterval(() => {
                    count++;
                    if (typeof Sticky !== 'undefined' || count > 15) {
                        resolve(true);
                        clearInterval(intervl);
                        window.waitForStickyIE[compId].splice(window.waitForStickyIE[compId].indexOf(intervl), 1);
                        return;
                    } 
                }, 100);
                window.waitForStickyIE[compId].push(intervl);
            });

            // create sticky
            /** arrange */
            let stickyId = Math.floor(Math.random() * 1000) + 1;
            el.setAttribute('y2-sticky-id', stickyId);
            el.setAttribute('data-sticky', '');
            el.setAttribute('data-margin-top', top);
            let parentSelector = (bindings && bindings.value && bindings.value.parentSelector || null);
            if (parentSelector) {
                // nextTick waits for parent to be rendered when replacing routes
                vnode.context.$nextTick(() => {
                    let parentElem = document.querySelector(parentSelector);
                    parentElem = (parentElem && parentElem[0]) ? parentElem[0] : parentElem;
                    if (parentElem && typeof parentElem.setAttribute === 'function') {
                        parentElem.setAttribute('data-sticky-container', '');
                        return true;
                    }
                });
            }

            /** execude script */
            await waitForScript;
            if (typeof Sticky !== 'undefined')  {
                vnode.context.$stickyObjs = (vnode.context.$stickyObjs) ? vnode.context.$stickyObjs : [];
                let sticky = new Sticky(`[y2-sticky-id="${stickyId}"]`);
                vnode.context.$stickyObjs.push(sticky);
            }
        }
    },
    unbind: function (e1, binding, vnode) {
        let compId = vnode.context._uid;
        // remove intervals
        if (typeof window.waitForStickyIE[compId] !== 'undefined') {
            for (let interval of window.waitForStickyIE[compId])
                clearInterval(interval);
            delete window.waitForStickyIE[compId];
        }
        // remove event listeners
        if (typeof vnode.context.$stickyObjs !== 'undefined') {
            for (let sticky of vnode.context.$stickyObjs)
                sticky.destroy();
            delete vnode.context.$stickyObjs;
        }
    }
});