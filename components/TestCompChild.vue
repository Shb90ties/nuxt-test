<template>
    <div class="test_comp_child"
            :style="{top: top}">
    </div>
</template>

<script>
    export default {
        name: 'test-comp-child',
        data() {
            return {
                top: '3px'
            }
        },
        beforeMount() {
            this.top = (Math.floor(Math.random() * 10) + 1) + 'px';
        }
    }
</script>

<style>
    .test_comp_child {
        border: 1px solid black;
        background: transparent;
        width: 15px;
        height: 15px;
        position: absolute;
        top: 3px;
        left: 5px;
    }
</style>
