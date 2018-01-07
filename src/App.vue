<template>
  <div id="app" class="wrapper">
<!--       <div class="preloader">
        <img src="static/img/loadnew2.gif" height="72" width="341" alt="">
      </div> -->
      <canvas_bg></canvas_bg>  
      <menuTemplate></menuTemplate>
      <transition :name="transitionName">
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

// require('assets/js/polifill.js')

import arrow_up from './assets/img/arrow.svg'
import menuTemplate from './components/menu.vue'
import footer_block from './components/footer.vue'
import canvas_bg from './components/canvas.vue'
import contact_us from './components/contact_us.vue'

    var isInViewport = function (elem) {

      if (elem === null) {
        return false}
      // for (const item of elem) {
        var bounding = elem.getBoundingClientRect();

        if (
             
         
            bounding.bottom <= (bounding.height + 70) && bounding.bottom >= 70
        ) {

          return true;
        } else {

              return false;

        }

    };


export default {
  name: 'app', 
  data: function() {
    return {
      arrow_up: render_svg(arrow_up),
      transitionName: '',
      menu_icon: ''
      // savedScrolldisign: 123
    }
  },
  mounted: function() {
    
    // $(document).ready(function() {  

    // site preloader -- also uncomment the div in the header and the css style for #preloader
    // $(window).on('load', function(){
      $('.preloader').fadeOut('slow',function(){$(this).remove();});
    // });
// $('.preloader').hide()
    // });
    // setTimeout(function () {
    //   $('.preloader').remove()
    // }, 1000)    
    // window.savedScrolldisign = 123
    this.menu_icon = document.querySelector('.artclose');

    const self = this

    $(window).scroll(function() {

    // console.log(window.pageYOffset);

      if ($('.bgCanvas').length >= 1 && $('.project-top').length === 0) {
         if (window.pageYOffset >= 100) {

          if ($('.bgCanvas').hasClass('pause') === false) {

          $('.bgCanvas').addClass('pause')
            CapitolTriangles.triangles.pause()
            // console.log('я умер')
        
          }
         }      
         else {
          if ($('.bgCanvas').hasClass('pause')) {

          $('.bgCanvas').removeClass('pause')
            CapitolTriangles.triangles.start()
            // console.log('я родился снова(')
        
          }          

          }

                  
      }    

       const w1 = document.querySelector('.w1'), 
        w2 = document.querySelector('.w2'),
        w3 = document.querySelector('.w3'),
        w4 = document.querySelector('.w4'), 
        w5 = document.querySelector('.w5'),
        w6 = document.querySelector('.w6'),
        w8 = document.querySelector('.w8');

      if ( isInViewport(w1) || isInViewport(w2) || isInViewport(w3) || isInViewport(w4) || isInViewport(w5) || isInViewport(w6) ||  isInViewport(w8)) {
        self.menu_icon.classList.add('artclose--blue')
      }
      else {
        self.menu_icon.classList.remove('artclose--blue')
      }
      // var scrolled = window.pageYOffset || document.documentElement.scrollTop;
       var top_scroll = $('.hello_section').height() == undefined ? $('.project-top').height() : $('.hello_section').height()   

      if ($(window).scrollTop() >= top_scroll ) {
        $('.arrow-up').hasClass('arrow-up--show') ? true : $('.arrow-up').addClass('arrow-up--show') 

      }
      else if ($(window).scrollTop() <= top_scroll ){
        $('.arrow-up').hasClass('arrow-up--show') ? $('.arrow-up').removeClass('arrow-up--show') : true 
      }



    })

 
  },

  components: {
  	canvas_bg,
  	menuTemplate,
    footer_block,
    contact_us,
    
  },
  watch: {
  '$route' (to, from) {
      //     $('html, body').animate({
      //     scrollTop: 0
      // }, 700);
    this.transitionName = to.name === 'project' || from.name === 'project' ? 'slide-right' : 'v'
    window.scrollTime = from.name === 'project' ? 0 : 500
    

       const w1 = document.querySelector('.w1'), 
        w2 = document.querySelector('.w2'),
        w3 = document.querySelector('.w3'),
        w4 = document.querySelector('.w4'), 
        w5 = document.querySelector('.w5'),
        w6 = document.querySelector('.w6'),
        w8 = document.querySelector('.w8');

      setTimeout(() => {
      if ( isInViewport(w1) || isInViewport(w2) || isInViewport(w3) || isInViewport(w4) || isInViewport(w5) || isInViewport(w6) ||  isInViewport(w8)) {
        this.menu_icon.classList.add('artclose--blue')
      }
      else {
        this.menu_icon.classList.remove('artclose--blue')
      }    
    }, 600)   
    }
  }
}
</script>




<style>
.v-enter-active, .v-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.v-enter-active {
  transition-delay: .5s;
}

.v-enter, .v-leave-active {
  opacity: 0
}

</style>

<style lang="scss" src="./assets/css/main.scss"></style>
