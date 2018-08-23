<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key = "item.id" >
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination">

            </div>
        </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data: function(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: "001",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg"
                },{
                    id: "002",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1808/2f/6ab88adea2619c02.jpg_750x200_675e9cf2.jpg"
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    // 穿透写法，不受scoped限制
    .wrapper >>> .swiper-pagination-bullet-active
        background : #fff !important
    .wrapper
        overflow : hidden
        width : 100%
        height : 0
        padding-bottom : 26.25%
        background : #ccc
        .swiper-img
            width : 100%
</style>

