<template>
    <div class="menu-wrap" :class="{'show':showMask}">
        <div class="menu">
            <div class="item" v-for="title in titles">
                <div class="title">
                    <div v-text="title.name">
                    </div>
                </div>
                <div class="clearfix content">
                    <div class="pull-left" v-bind:class="{active: itemSelected(key, title)}" v-for="(item,key) in dict[title.name]" @click="clickItem(key, title)"><span v-text="key"></span></div>
                    <!--<div class="pull-left active"><span>塑料</span></div>-->
                    <!--<div class="pull-left"><span>金属</span></div>-->
                    <!--<div class="pull-left"><span>其他</span></div>-->
                </div>
            </div>
        </div>
        <div class="button-group clearfix">
            <div class="cancel" @click="closeMask">取消</div>
            <div class="ok" @click="chooseOk">确定</div>
            <div class="reset" @click="chooseReset">全部</div>
        </div>
    </div>
</template>

<script>
    import table from '../data/table';
    import surface from '../data/titleSurface'

    // console.log(surface);

    export default {
        name: "Menu",
        data() {
            return {
                titles: table.titles,
                dict: table.dict,
            }
        },
        computed: {
            showMask() {
                return this.$store.state.showMask;
            },
            itemSelected(){
                return function(name, title){
                    return title.selecting.indexOf(name) >= 0;
                }
            },
            selectedCount(){
                return this.titles.reduce((p1, p2) => {
                    return p1 + p2.selecting.length;
                }, 0);
            }
        },
        watch: {
            showMask: function(current, old){
                if(current){
                    for(let i in this.titles){
                        let titleOrigin = table.titles[i];
                        let titleMenu = this.titles[i];
                        titleMenu.selecting.splice(0, titleMenu.selecting.length);
                        titleOrigin.selected.forEach(p => {
                            titleMenu.selecting.push(p);
                        })
                    }
                }
            }
        },
        methods: {
            closeMask(){
                this.$store.commit('setShowMask',{
                    show: false,
                    method: 1,
                    titles: this.titles,
                });
            },
            chooseOk(){
                this.$store.commit('setShowMask',{
                    show: false,
                    method: 2,
                    titles: this.titles,
                });
            },
            chooseReset(){
                this.$store.commit('setShowMask',{
                    show: false,
                    method: 3,
                    titles: this.titles,
                });
            },
            clickItem(name, title){
                var index = title.selecting.indexOf(name);
                if(index === -1){
                    title.selecting.push(name);
                    //如果点选了被贴物大类, 全选所有小类
                    if(title.name === this.titles[0].name){
                        let titleB = this.titles[1];
                        surface[name].forEach(p => {
                            titleB.selecting.push(p);
                        })
                    }
                    //如果点选了被贴物小类, 选中大类
                    else if(title.name === this.titles[1].name){
                        let titleA = this.titles[0];

                        for(let n in surface){
                            if(surface[n].indexOf(name) >= 0){
                                if(titleA.selecting.indexOf(n) === -1){
                                    titleA.selecting.push(n);
                                }
                                break;
                            }
                        }
                    }
                } else {
                    title.selecting.splice(index, 1);
                    //如果点消了被贴物大类, 取消所有小类
                    if(title.name === this.titles[0].name){
                        let titleB = this.titles[1];
                        for(let i = titleB.selecting.length -1; i >=0; i--){
                            let val = titleB.selecting[i];
                            if(surface[name].indexOf(val) >= 0){
                                titleB.selecting.splice(i, 1);
                            }
                        }
                    }
                    //如果点消了被贴物小类, 如果所有小类消失, 则选消大类
                    else if(title.name === this.titles[1].name){
                        let titleA = this.titles[0];
                        for(let n in surface){
                            if(surface[n].indexOf(name) >= 0){
                                if(!surface[n].some(p => {
                                    return title.selecting.indexOf(p) >= 0;
                                })){
                                    let i = titleA.selecting.indexOf(n);
                                    if(i >= 0){
                                        titleA.selecting.splice(i, 1);
                                    }
                                }
                                break;
                            }
                        }
                    }
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .menu-wrap {
        transition: transform .25s ease;
        transform: translate3d(100%, 0, 0);
        position: fixed;
        width: 85%;
        top: 0;
        bottom: 0;
        left: 100%;
        height: 100%;
        color: #333;
        background-color: #f7f7f7;
        &.show {
            transform: translate3d(-100%, 0, 0);
        }
        .menu {
            -webkit-overflow-scrolling: touch;
            overflow: hidden;
            overflow-y: auto;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            padding-bottom: 50px;
            .item {
                margin-bottom: 15px;
                background: #fff;
                .title {
                    line-height: 25px;
                    padding: 10px;
                    div {
                        height: 25px;
                        max-width: 250px;
                        overflow: hidden;
                        font-size: 16px;
                        color: #333;
                        text-overflow: ellipsis;
                    }
                }
                .content {
                    position: relative;
                    padding: 10px 0 0 10px;
                    &:before {
                        content: "";
                        position: absolute;
                        z-index: 1;
                        pointer-events: none;
                        background-color: #e5e5e5;
                        height: 1px;
                        right: 0;
                        top: 0;
                        left: 10px;
                    }
                    div {
                        box-sizing: border-box;
                        float: left;
                        width: 33.33%;
                        padding-right: 10px;
                        height: 30px;
                        line-height: 30px;
                        margin-bottom: 10px;
                        overflow: hidden;
                        &.active {
                            span {
                                color: #4976ae;
                                background-color: rgba(73, 118, 174, .3);
                                height: 30px;
                                line-height: 30px;
                                &:after {
                                    content: "";
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
                                    width: 15px;
                                    height: 15px;
                                    border-radius: 0 0 2px 0;
                                    background: url("../assets/image/select.png") no-repeat;
                                    background-size: 15px auto;
                                    overflow: hidden;
                                    z-index: 1;
                                }
                            }
                        }
                        span {
                            position: relative;
                            display: block;
                            padding: 0 5px;
                            color: #666;
                            background-color: #f7f7f7;
                            border-radius: 4px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            text-align: center;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .button-group {
            display: flex;
            z-index: 10;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            > div {
                flex: 1;
                font-size: 16px;
                height: 49px;
                line-height: 49px;
                text-align: center;
                &.cancel {
                    color: #333;
                    background-color: #fff;
                    box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .07);
                }
                &.reset {
                    color: #fcfffc;
                    background-color: #6fa4ff;
                    box-shadow: 0 -1px 2px 0 rgba(5, 0, 0, .07);
                }
                &.ok {
                    color: #fff;
                    background-color: #4976ae;
                }
            }
        }
    }
</style>
