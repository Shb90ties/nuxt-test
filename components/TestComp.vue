<template>
    <div class="test_comp"
            :style="{top: top}">
        <h1>{{this._uid}}</h1>

        <test-comp-child-one></test-comp-child-one>
         <test-comp-child-one></test-comp-child-one>
          <test-comp-child-one></test-comp-child-one>

         <test-comp-child-two></test-comp-child-two>
         <test-comp-child-two></test-comp-child-two>
         <test-comp-child-two></test-comp-child-two>

        <test-comp-child></test-comp-child>
        <test-comp-child></test-comp-child>
        <test-comp-child></test-comp-child>

        <empty-comp></empty-comp>
    </div>
</template>

<script>
    import TestCompChild from './TestCompChild.vue';
    import TestCompChildOne from '~/components/TestCompChildOne.vue';
    import TestCompChildTwo from '~/components/TestCompChildTwo.vue';

    export default {
        name: 'test-comp',
        components: {
            TestCompChildOne,
            TestCompChildTwo,
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
        },
        mounted() {
            // this.createMemoryLeak();
        },
        beforeDestroy() {
            // if (this.willDestroy) {
            //     window.removeEventListener('scroll', this.scroll);
            // }
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
