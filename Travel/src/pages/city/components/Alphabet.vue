<template>
    <ul class="list">
        <li class="item" 
        v-for="item of letters" 
        :key="item"
        :ref="item"
        @click = "handleLetterClick"
        @touchstart = "handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        cities: Object
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
        letters () {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick: function(e) {
            this.$emit('change' , e.target.innerText)
        },
        handleTouchStart: function(e) {
            this.touchStatus = true
        },
        handleTouchMove: function(e) {
            if(this.touchStatus){   //手指触碰后执行
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {   //使用settimeout延迟16ms执行，如果已经执行过了则不再执行，以此进行事件节流
                    const endY = e.touches[0].clientY
                    const index = Math.floor((endY - (this.startY + 79)) / 20)
                    if(index >= 0 && index <= this.letters.length){
                        this.$emit('change' , this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd: function(e) {
            this.touchStatus = false
        }
    },
    name: "CityAlphabet"
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute 
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .44rem
            color $bgColor
</style>
