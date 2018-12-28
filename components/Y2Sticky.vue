<template>
    <div class="y2_sticky">
        <slot :style="defaultStyle"></slot>
    </div>
</template>

<script>
    export default {
        props: {
            top: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                defaultStyle: {},
            }
        },
        mounted() {
            console.log('mounted!!');

            this.$nextTick(this.testAxios);
        },
        methods: {
            setDefaultStyle() {
                this.defaultStyle = {
                    position: 'sticky',
                    top: this.top
                }
            }
        }
    }
</script>
