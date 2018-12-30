<template>
    <div class="test_comp_three"
            :style="{top: top}">
        <h1>{{this._uid}}</h1>
    </div>
</template>

<script>
    import TestCompChild from './TestCompChild.vue';

    export default {
        name: 'test-comp-three',
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
            this.willDestroy = false;
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
    .test_comp_three {
        background-color: brown;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 100px;
        left: 300px;
    }
</style>
