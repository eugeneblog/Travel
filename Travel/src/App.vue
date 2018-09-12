<template>
  <div id="app">
    <keep-alive>  //路由内容加载一次只会就放到缓存
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
