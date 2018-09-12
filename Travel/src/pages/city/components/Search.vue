<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        
        <div class="search-content" ref="oSearch" v-show="keyword">
            <ul>
                <li class="search-items border-bottom" 
                v-for="item of list" 
                :key="item.id"
                @click="handleClickCity(item.name)"
                >
                    {{item.name}}
                </li>
                <li v-show="!list.length" class="search-items border-bottom" >没有找到该城市，请检查拼写</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'   //页面滚动插件
export default {
    name: "CitySearch",
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        handleClickCity(city) {
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    watch: {
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }
            this.timer = setTimeout(() => {   //遍历citis
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 ||
                        value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            }, 100);
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.oSearch,{click:true})
    },
}
</script>
<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .search
        height .72rem
        background $bgColor
        padding 0 .1rem
        .search-input
            height .62rem
            line-height .62rem
            box-sizing border-box
            padding 0 .1rem
            width 100%
            text-align center
            border-radius .06rem
            color #666
    .search-content
        overflow hidden
        position absolute 
        top 1.58rem
        left 0
        right 0
        bottom 0
        z-index 1
        background #ffffff
        .search-items
            line-height .62rem
            padding-left .2rem
            color #666

</style>
