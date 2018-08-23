<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for = "(page ,index) of pages" :key = "index">
                <div class="icon" v-for = 'item of page' :key = 'item.id'>
                    <div class="icon-img" >
                        <img :src='item.imgUrl' alt=""/>
                    </div>
                    <p class="icon-desc">{{item.iconTest}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data(){
            return {
                list:[
                    {
                        id: '001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        iconTest: '景点门票'
                    },{
                        id: '002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                        iconTest: '水上乐园'
                    },{
                        id: '003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        iconTest: '游乐场'
                    },{
                        id: '004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        iconTest: '海洋馆'
                    },{
                        id: '005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        iconTest: '动植物园'
                    },{
                        id: '006',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        iconTest: '玩转长隆'
                    },{
                        id: '007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                        iconTest: '城市观光'
                    },{
                        id: '008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
                        iconTest: '海滨沙滩'
                    },{
                        id: '009',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        iconTest: '景点门票'
                    },{
                        id: '010',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                        iconTest: '水上乐园'
                    },{
                        id: '011',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        iconTest: '游乐场'
                    },{
                        id: '012',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        iconTest: '海洋馆'
                    },{
                        id: '013',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        iconTest: '动植物园'
                    },{
                        id: '014',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        iconTest: '玩转长隆'
                    },{
                        id: '015',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                        iconTest: '城市观光'
                    },{
                        id: '016',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
                        iconTest: '海滨沙滩'
                    }
                ]
            }
        },
        computed:{
            pages() {
                const pages = [];
                this.list.forEach((item , index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item);
                });
                return pages;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        height : 0
        padding-bottom : 50%
    .icon
        position relative
        overflow : hidden
        width : 25%
        height : 0
        float left
        padding-bottom : 25%
        .icon-img
            position : absolute
            top : 0
            left : 0
            right : 0
            bottom : .44rem
            box-sizing : border-box
            padding : .1rem
            img 
                display : block
                margin : 0 auto
                height 100%
        .icon-desc
            position : absolute
            left : 0
            right : 0
            bottom : 0
            line-height : .44rem
            text-align : center
            color : $darkTextColor
            ellipsis()

</style>
