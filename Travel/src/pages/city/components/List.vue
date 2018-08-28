<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="buttom-list">
                    <div class="buttom-wraper">
                        <div class="buttom">
                            北京
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="buttom-list">
                    <div class="buttom-wraper" v-for="item of hot" :key="item.id">
                        <div class="buttom">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area" 
                v-for="(item, key) of cities" 
                :key = "key"
                :ref = "key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'   //页面滚动插件
export default {
    name: "CityList",
    props: {
        cities: Object,
        hot: Array,
        letter: String
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {  //侦听器，侦听letter属性变化
        letter (){     //根据letter属性变化改变页面滚动位置
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .border-topbottom
        &:before
            border-color #777
        &:after
            border-color #777
    .border-bottom
        &:before
            border-color #777
    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden
        .title
            line-height .54rem
            background #eeeeee
            padding-left .2rem
            color #666
            font-size .26rem
        .buttom-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .buttom-wraper
                float left
                width 33.3%
                .buttom
                    margin .1rem
                    padding .1rem 0
                    border .02rem solid #cccccc
                    border-radius .06rem
                    text-align center
        .item-list
            .item
                line-height .54rem
                color #666666
                padding-left .2rem
</style>
