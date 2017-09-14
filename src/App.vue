<template>
  <div id="app" class="wrapper">

      <canvas_bg></canvas_bg>  
      <menuTemplate></menuTemplate>
      <transition>
        <router-view></router-view>
      </transition>	
      <div class="arrow-up">
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

    // scroll btn up
    $(".arrow-up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    // hide\show scroll btn up
    $(window).scroll(function() {

      if ($(window).scrollTop() >= $('.hello_section').height()) {
        $('.arrow-up').hasClass('arrow-up--show') ? true : $('.arrow-up').addClass('arrow-up--show') 

      }
      else {
        $('.arrow-up').hasClass('arrow-up--show') ? $('.arrow-up').removeClass('arrow-up--show') : true 
      }

    })

    // paralax on webgl
    // window.onscroll = function(e) {
    //     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //     $('.big-image img').css({
    //         'transform': 'translateY(' + scrolled * 0.3 + 'px)'
    //     })
    // }    
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
