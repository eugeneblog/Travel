<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display : flex
    line-height : .86rem
    background : $bgColor
    color : #fff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align : center
        font-size : .4rem
    .header-input
      flex : 1
      line-height : .64rem
      height : .64rem
      padding-left : .2rem
      background : #fff
      margin-left : .2rem
      margin-top : .12rem
      color : #ccc
      border-radius : .1rem
    .header-right
      width : 1.24rem
      float : right 
      text-align : center
      .back-icon
        margin-left : -.04rem
        font-size : .24rem
</style>

