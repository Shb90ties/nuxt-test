<template>
    <div class="test_comp_child"
            :style="{top: top}">
    </div>
</template>

<script>
    export default {
        name: 'test-comp-child-one',
        data() {
            return {
                top: '3px'
            }
        },
        beforeMount() {
            this.top = (Math.floor(Math.random() * 10) + 1) + 'px';
        },
        mounted() {
            // window.addEventListener('scroll', () => {
            //     console.log('?DS?F?SDF?');
            // });
        }
    }
</script>

<style>
    .test_comp_child {
        border: 1px solid blue;
        background: transparent;
        width: 6px;
        height: 6px;
        position: absolute;
        top: 3px;
        left: 5px;
    }
</style>
