<template>
    <div class="message" :class="{'active': showMessage}">
        <div>网络错误，请检查您的网络设置</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {},
        computed: {
            showMessage(){
                return this.$store.state.showMessage;
            }
        },
        created() {
            setTimeout(()=>{
                this.$store.commit('setShowMessage', true);
            },1000)
        }
    };
</script>

<style lang="less">
    .message{
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -100px;
        div{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 12px;
            color: white;
            display: block;
            width: 200px;
            height: auto;
            margin: 0 auto;
            padding: 8px;
            background: #1F1F1F;
            border-radius: 4px;
            opacity: 0;
            -webkit-transition: all 0.2s ease-out;
            -moz-transition: all 0.2s ease-out;
            -o-transition: all 0.2s ease-out;
            transition: all 0.2s ease-out;
            text-align: center;
        }
        &.active{
            top: 100px;
            div{
                opacity: 1;
            }
        }
    }
</style>