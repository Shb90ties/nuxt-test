<template>
    <div class="my-page">
      <span>TEST PAGE</span>
      <nuxt-link class="the_button" to="/"></nuxt-link>
    </div>
</template>


<style lan="scss">
  .my-page {
    width: 100%;
    max-width: 980px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: aqua;
  }

  .the_button {
    position: absolute;
    top: 50px;
    background: white;
    width: 100px;
    height: 70px;
  }
</style>

