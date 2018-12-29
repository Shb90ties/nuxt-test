import Vue from 'vue';
import EmptyComp from '../components/EmptyComp.vue';

const emptyCompObj = Vue.component('empty-comp', EmptyComp);

export default ({ app }) => {
    if (typeof app.memQueryLeak === 'undefined') {
        let query = (app && app.context && app.context.route && app.context.route.query) ? app.context.route.query : {};
        if (query['disable-mem-leak-test'] && typeof query['disable-mem-leak-test'] === 'string') {
            let compArr = query['disable-mem-leak-test'].split(',');
            app.memQueryLeak = {};
            for (let comp of compArr) {
                app.memQueryLeak[comp] = true;
            }
        }
    }

    Vue.mixin({
        created() {
            if (typeof app.memQueryLeak !== 'undefined') {
                for (let i in this.$options.components) {
                    let name = this.$options.components[i].name ? this.$options.components[i].name : null;
                    if (name && app.memQueryLeak[name]) {
                        this.$options.components[i] = emptyCompObj;
                    }
                }
            }
        },
    });
}