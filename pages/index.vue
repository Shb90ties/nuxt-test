<template>
    <div class="my-page">
      <div class="main-container">
            <div v-y2-sticky="{top: 50, parentSelector: '.my-page'}" data-margin-top="50" class="sideA"></div>
            <div v-y2-sticky="{top: 50, parentSelector: '.my-page'}" class="sideB"></div>
            <div class="center">
              <nuxt-link class="the_button" to="/test"></nuxt-link>
            </div>
            <test-comp></test-comp>
            <test-comp></test-comp>
            <test-comp></test-comp>
            <test-comp></test-comp>

            <test-comp-one></test-comp-one>
            <test-comp-one></test-comp-one>
            <test-comp-one></test-comp-one>
            <test-comp-one></test-comp-one>


            <test-comp-two></test-comp-two>
            <test-comp-two></test-comp-two>
            <test-comp-two></test-comp-two>
            <test-comp-two></test-comp-two>
            <test-comp-two></test-comp-two>


            <test-comp-three></test-comp-three>
            <test-comp-three></test-comp-three>
            <test-comp-three></test-comp-three>
            <test-comp-three></test-comp-three>
            <test-comp-three></test-comp-three>
            <test-comp-three></test-comp-three>


            <test-comp-four></test-comp-four>
            <test-comp-four></test-comp-four>
            <test-comp-four></test-comp-four>
            <test-comp-four></test-comp-four>
            <test-comp-four></test-comp-four>
      </div>
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import TestComp from '~/components/TestComp.vue';
import TestCompOne from '~/components/TestCompOne.vue';
import TestCompTwo from '~/components/TestCompTwo.vue';
import TestCompThree from '~/components/TestCompThree.vue';
import TestCompFour from '~/components/TestCompFour.vue';
import axios from 'axios';

export default {
  name: 'index',
  components: {
    AppLogo,
    TestComp,
    TestCompOne,
    TestCompTwo,
    TestCompThree,
    TestCompFour
  },
  data() {
    return {
      test: {1: true}
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    async testAxios() {
      // this.test.axios = await axios.get('https://reqres.in/api/users?page=2');
      // console.log('binfg!', this.test.axios);
    }
  }
}
</script>

<style lan="scss">
  .my-page {
    width: 100%;
    max-width: 980px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: aqua;
  }

  .center {
    height: 800px;
    background-color: blue;
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
  }

  .sideA, .sideB {
    height: 100px;
    width: 80px;
    background-color: black;
    display: inline-block;
  }

  .sideA {
    float: right;
  }

  .sideB {
    float: left;
  }

  .the_button {
    position: absolute;
    top: 50px;
    background: white;
    width: 100px;
    height: 70px;
  }
</style>

