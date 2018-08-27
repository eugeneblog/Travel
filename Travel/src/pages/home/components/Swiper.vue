<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="list.length">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key = "item.id">
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
                    loop: true,
                }
            }
        },
        props: {
            list: Array
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

