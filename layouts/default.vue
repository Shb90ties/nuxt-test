<template>
  <div class="my-app">
    <header></header>
    <nuxt/>
  </div>
</template>

<script>

  export default {
    mounted() {
      window.vue = this.$parent;
    }
  }
</script>

<style>
  .my-app {
    background-color: grey;
    min-height: 2000px;
    width: 100%;
  }

  header {
    background-color: black;
    height: 55px;
    width: 100%;
    margin-bottom: 10px;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>

