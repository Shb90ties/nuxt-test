<template>
    <div class="test_comp"
            :style="{top: top}">
        <h1>{{this._uid}}</h1>
        <test-comp-child></test-comp-child>
        <test-comp-child></test-comp-child>
        <test-comp-child></test-comp-child>

        <empty-comp></empty-comp>
    </div>
</template>

<script>
    import TestCompChild from './TestCompChild.vue';

    export default {
        name: 'test-comp',
        components: {
            TestCompChild
        },
        data() {
            return {
                top: '10px',
                willDestroy: false
            }
        },
        beforeMount() {
            this.top = (Math.floor(Math.random() * 700) + 1) + 'px';
            this.willDestroy = ((Math.floor(Math.random() * 4) + 1) <= 2);
            if (!this.willDestroy)
                console.log('%c creates memory leak '+this._uid, 'background-color: red; color: black;');
        },
        mounted() {
            this.createMemoryLeak();
        },
        beforeDestroy() {
            if (this.willDestroy) {
                window.removeEventListener('scroll', this.scroll);
            }
        },
        methods: {
            createMemoryLeak() {
                window.addEventListener('scroll', this.scroll);
            },
            scroll() {}
        }
    }
</script>

<style>
    .test_comp {
        background-color: red;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 100px;
        left: 300px;
    }
</style>
