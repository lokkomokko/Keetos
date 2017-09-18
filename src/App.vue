<template>
  <div id="app" class="wrapper">

      <canvas_bg></canvas_bg>  
      <menuTemplate></menuTemplate>
      <transition>
        <router-view></router-view>
      </transition>	
      <div class="arrow-up" v-scroll-to="{
        el: '.wrapper',
           duration: 1000}">
        <span class="arrow-up__text">вверх</span>
        <span class="arrow-up__svg" v-html="arrow_up"></span>
      </div>
      <contact_us></contact_us>
    <footer_block></footer_block>  

  </div>
</template>

<script>
import render_svg from './assets/js/render_svg.js'


import arrow_up from './assets/img/arrow_up.svg'
import menuTemplate from './components/menu.vue'
import footer_block from './components/footer.vue'
import canvas_bg from './components/canvas.vue'
import contact_us from './components/contact_us.vue'

export default {
  name: 'app', 
  data: function() {
    return {
      arrow_up: render_svg(arrow_up)
    }
  },
  mounted: function() {


    // hide\show scroll btn up
    $(window).scroll(function() {
       var top_scroll = $('.hello_section').height() == undefined ? $('.project-top').height() : $('.hello_section').height()   

      if ($(window).scrollTop() >= top_scroll ) {
        $('.arrow-up').hasClass('arrow-up--show') ? true : $('.arrow-up').addClass('arrow-up--show') 

      }
      else {
        $('.arrow-up').hasClass('arrow-up--show') ? $('.arrow-up').removeClass('arrow-up--show') : true 
      }

    })

 
  },

  components: {
  	canvas_bg,
  	menuTemplate,
    footer_block,
    contact_us,
    
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
