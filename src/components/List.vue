<template>
    <div class="list-wrap">
        <div class="list-item" v-for="row in rows">
            <div v-for="title in titles"><span v-text="title.name"></span>：<span class="color" v-text="row[title.name]"></span></div>
            <div v-for="show in shows"><span v-text="show"></span>：<span class="color" v-text="row[show]"></span></div>
        </div>
        <!--loading效果-->
        <!--<div class="lds-spinner">-->

    </div>
</template>

<script>

    import table from '../data/table';

    export default {
        data() {
            return {
                titles: table.titles,
                shows: table.shows,
                rows: [],
            }
        },
        watch: {
            refresh(){
                this.getData();
            }
        },
        created(){
            this.getData();
        },
        computed: {
            refresh(){
                return this.$store.state.refresh;
            }
        },
        methods: {
            getData: function(){
                let titles = table.titles;

                this.rows.splice(0, this.rows.length);
                table.rows.forEach(row => {
                    var use = true;
                    for(var i in table.titles){
                        var title = table.titles[i];
                        if(title.selected.length === 0){
                            continue;
                        }
                        if (title.selected.indexOf(row[title.name]) === -1){
                            use = false;
                            break;
                        }
                    }
                    if(use){
                        this.rows.push(row);
                    }
                })

                // console.log(this.rows);

            }
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
                .color {
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
