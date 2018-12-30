<template>
    <div class="test_comp_two"
            :style="{top: top}">
        <h1>{{this._uid}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'test-comp-two',
        data() {
            return {
                top: '10px'
            }
        },
        beforeMount() {
            this.top = (Math.floor(Math.random() * 700) + 1) + 'px';
        },
        beforeDestroy() {
        },
        methods: {
            scroll() {}
        }
    }
</script>

<style>
    .test_comp_two {
        background-color: grey;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 100px;
        left: 300px;
    }
</style>
