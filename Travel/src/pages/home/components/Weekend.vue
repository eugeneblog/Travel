<template>
    <div>
        <div class="recomment-title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommentList" :key = "item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.descTitle}}</p>
                    <p class="item-desc">{{item.descContext}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeWeekend",
    data(){
        return {
            recommentList:[
                {
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg',
                    descTitle: '大连海洋世界',
                    descContext: '浪漫大连浪漫大连浪漫大连'
                },
                {
                    id: '002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_600x330_cd78f1b7.jpg',
                    descTitle: '大连海洋世界',
                    descContext: '浪漫大连浪漫大连浪漫大连'
                },
                {
                    id: '003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/43/1217ccf8106bca9a077b58bf56bb2598.water.jpg_600x330_e71586ed.jpg',
                    descTitle: '大连海洋世界',
                    descContext: '浪漫大连浪漫大连浪漫大连'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .recomment-title
        margin-top .2rem
        line-height .8rem
        background #f4f4f4
        text-indent .2rem
    
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 38.9%
        .item-img
            width 100%
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()

</style>
