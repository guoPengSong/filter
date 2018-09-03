<template>
    <div class="list-wrap">
        <div class="list-item" v-for="item in 10">
            <div>被贴物大类：<span>塑料</span></div>
            <div>被贴物小类：<span>PP光面</span></div>
            <div>最低贴标温度：<span>-5</span></div>
            <div>使用温度范围：<span>-5——55</span></div>
            <div>是否需要超过一年的可移除性能：<span>否</span></div>
            <div>是否有食品间接接触要求：<span>否</span></div>
            <div>是否有皮肤致敏性测试认证：<span>是</span></div>
            <div>面材类型：<span>铜版纸</span></div>
            <div>底纸类型：<span>62白格拉辛 背印</span></div>
            <div>综合性能/价格偏好：<span>适应性广</span></div>
            <div>Product Description：<span>AW3269 铜版纸 PC/AR600/62白格拉辛 背印</span></div>
            <div>其他说明：<span>不锈钢被贴物的贴标位置可能会出现变暗的情况。</span></div>
        </div>
        <!--loading效果-->
        <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .list-wrap {
        padding: 20px 15px 30px;
        margin-top: 59px;
        .list-item {
            padding: 8px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #81366b;
            background: #ffffff;
            div {
                span {
                    color: #4976ae;
                }
            }
        }
        .lds-spinner {
            color: official;
            display: inline-block;
            position: fixed;
            width: 64px;
            height: 64px;
            left: 50%;
            top: 50%;
            margin-left: -32px;
            margin-top: -64px;
        }
        .lds-spinner div {
            transform-origin: 32px 32px;
            animation: lds-spinner 1.2s linear infinite;
        }
        .lds-spinner div:after {
            content: " ";
            display: block;
            position: absolute;
            top: 3px;
            left: 29px;
            width: 5px;
            height: 14px;
            border-radius: 20%;
            background: #4976ae;
        }
        .lds-spinner div:nth-child(1) {
            transform: rotate(0deg);
            animation-delay: -1.1s;
        }
        .lds-spinner div:nth-child(2) {
            transform: rotate(30deg);
            animation-delay: -1s;
        }
        .lds-spinner div:nth-child(3) {
            transform: rotate(60deg);
            animation-delay: -0.9s;
        }
        .lds-spinner div:nth-child(4) {
            transform: rotate(90deg);
            animation-delay: -0.8s;
        }
        .lds-spinner div:nth-child(5) {
            transform: rotate(120deg);
            animation-delay: -0.7s;
        }
        .lds-spinner div:nth-child(6) {
            transform: rotate(150deg);
            animation-delay: -0.6s;
        }
        .lds-spinner div:nth-child(7) {
            transform: rotate(180deg);
            animation-delay: -0.5s;
        }
        .lds-spinner div:nth-child(8) {
            transform: rotate(210deg);
            animation-delay: -0.4s;
        }
        .lds-spinner div:nth-child(9) {
            transform: rotate(240deg);
            animation-delay: -0.3s;
        }
        .lds-spinner div:nth-child(10) {
            transform: rotate(270deg);
            animation-delay: -0.2s;
        }
        .lds-spinner div:nth-child(11) {
            transform: rotate(300deg);
            animation-delay: -0.1s;
        }
        .lds-spinner div:nth-child(12) {
            transform: rotate(330deg);
            animation-delay: 0s;
        }
        @keyframes lds-spinner {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }
</style>
