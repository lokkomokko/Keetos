<template>
  <div>
      CHECK PAGE 2 <router-link to="/page">go back</router-link>
    <router-view></router-view>
  </div>


</template>


<script>

export default {
  name: 'checkPage2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },

}




</script>

