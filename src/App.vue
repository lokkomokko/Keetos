<template>
  <div id="app" class="wrapper">

      <canvas_bg></canvas_bg>  
      <menuTemplate></menuTemplate>
     <transition>
     	 <router-view></router-view>
     </transition>	


  </div>
</template>

<script>
import menuTemplate from './components/menu.vue'

import canvas_bg from './components/canvas.vue'

export default {
  name: 'app', 
  components: {
  	canvas_bg,
  	menuTemplate
  }
}
</script>

<style>


.v-enter-active, .v-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}

.v-enter-active {
  transition-delay: .3s;
}

.v-enter, .v-leave-active {
  opacity: 0
}

</style>

<style lang="scss" src="./assets/css/main.scss"></style>
