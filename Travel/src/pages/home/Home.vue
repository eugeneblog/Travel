<template>
  <div>
    <div>Home</div>
    <router-link to="/list" class="home">list</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home{
    font-size: 50px;
  }
</style>
