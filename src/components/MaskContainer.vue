<template>
    <div class="mask" :class="{'show': showMask}" @click="closeMask"></div>
</template>

<script>
    export default {
        name: "MaskContainer",
        data(){
            return{

            }
        },
        methods:{
            closeMask(){
                this.$store.commit('setShowMask',{
                    method: 1,
                    show: false,
                });
            }
        },
        computed: {
            showMask(){
                return this.$store.state.showMask;
            }
        }
    }
</script>

<style scoped lang="less">
    .mask{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s ease,visibility .5s ease;
        background-color: rgba(0,0,0,.7);
        /*z-index: 1;*/
        &.show{
            opacity: 1;
            visibility: visible;
        }
    }
</style>
