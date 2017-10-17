<template>

		  <div>
        <!-- <canvas_bg></canvas_bg> -->
        <!-- верхняя секция главная -->
        <div class="hello_section hello_section--page-item">

          <div class="logo_wrap page-header">
            <div class="page-header__empty"></div>
            <div class="page-header__wrapper">
              <div class="page-header__left-section">
                <h1 class="page-header__left-section__h1">Websites</h1>
              </div>      
              <div class="page-header__right-section">
                <h3 class="page-header__right-section__title">Our sites</h3>
                <p>
                  We have worked with more than 200 projects for a huge number of clients and can not show all projects.
                  <br><br>
                  So, we made a short selection.          
                </p>
              </div>        
            </div>
          </div>
          <div class="bottom_section">
            <div class="desc">We love what we do</div>
            <div class="scroll"><img src="../assets/img/scroll.png" alt=""></div>
            <div class="lang">
              <a href="#">RU</a>
            </div>
          </div>
        </div>

      <div class="web-wrap w4">

        <div class="web-item">
          <a href="" class="web-item__text">
            <h2 class="web-item__name">Победа</h2>
            <p class="web-item__desc">Российский авиаперевозчик</p>
            <span class="web-item__link">Подробнее</span>
            <span class="web-item__date">May 2016</span>
          </a>
          <div class="web-item__image">
            <div class="web-item__image-back"></div>  
            <img src="https://f.vividscreen.info/soft/10cac5dddfcb43ebfce9e89bced1267a/Macaw-Parrot-1080x1920.jpg" height="595" width="683" alt="">
          </div>
        </div>

        <div class="web-item">
          <a href="" class="web-item__text">
            <h2 class="web-item__name">Honda international Russia </h2>
            <p class="web-item__desc">Российский авиаперевозчик</p>
            <span class="web-item__link">Подробнее</span>
            <span class="web-item__date">May 2016</span>
          </a>
          <div class="web-item__image">
          <div class="web-item__image-back"></div> 
            <img src="https://f.vividscreen.info/soft/b9648821e30f1647035df026aecee79e/Fluffy-Cat-1080x1920.jpg" alt="">
          </div>
        </div>

        <div class="web-item">
          <a href="" class="web-item__text">
            <h2 class="web-item__name">Победа</h2>
            <p class="web-item__desc">Российский авиаперевозчик</p>
            <span class="web-item__link">Подробнее</span>
            <span class="web-item__date">May 2016</span>
          </a>
          <div class="web-item__image">
          <div class="web-item__image-back"></div> 
            <img src="http://androidwalls.net/wp-content/uploads/2014/09/Top%20View%20Urban%20City%20Skyscraper%20Android%20Wallpaper.jpg" alt="">
          </div>
        </div>

        <div class="web-item">
          <a href="" class="web-item__text">
            <h2 class="web-item__name">Победа</h2>
            <p class="web-item__desc">Российский авиаперевозчик</p>
            <span class="web-item__link">Подробнее</span>
            <span class="web-item__date">May 2016</span>
          </a>
          <div class="web-item__image">
          <div class="web-item__image-back"></div> 
            <img src="https://wallpaperscraft.com/image/eiffel_tower_paris_france_night_lights_59604_720x1280.jpg" alt="">
          </div>
        </div>        

      </div>


		  </div>		

</template>


<script>

import canvas_bg from './canvas'
const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');

export default {
  name: 'website',
  data () {
    return {
    }
  },
  mounted: function() {

    setTimeout(()=>{
      window.scrollTo(0, 0)
    }, 500)

    if ($('.bgCanvas').hasClass('pause') && window.pageYOffset <= 100) {
        $('.bgCanvas').removeClass('pause')
          CapitolTriangles.triangles.start()    
    }
    
  // init controller

  var controller = new ScrollMagic.Controller();
  var animateElems = document.querySelectorAll('.web-item__image-back')
  // build scene



  for (var item of animateElems) {
var tl = new TimelineMax()

tl.to(item, 1, {autoAlpha: 0.9})
  // .to(item, 1, {autoAlpha: 1}, 1)    
  var scene = new ScrollMagic.Scene({
                  triggerElement: item,
                  offset: '50%',
                  // scrollOffset: 100,
                  duration: '120%',
                  triggerHook: 0
                  })
               
              // .addIndicators()
              .setTween(tl)
              // .setClassToggle(item, 'web-item__image-back--fade')

              .addTo(controller);    
  } 


    $(".scroll").click(function() {
      var block_height = $(".hello_section").height(); 
        $('html, body').animate({
            scrollTop: block_height
        }, 700);
    }); 

    // paralax on webgl
    window.onscroll = function(e) {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        $('.web-item__image').each(function() {
          
          // console.log(`$(this).offset().top <= scrolled ${$(this).offset().top - 100}, ${scrolled}`)
          // if (($(this).offset().top - 100) <= scrolled ) {
            var _offset = +($(this).offset().top -  scrolled)
            var need_offset = +_offset * -0.4

            $(this).find('img').css({
            'transform': 'translateY(' +  need_offset + 'px)',
            // 'opacity' : +(+(_offset  +500)* 0.001)

          } )

          // }
          // else {
            // $(this).find('img').css('transform', 'translateY(0)')
          // }
        });
        // $('.web-item__image img').css({
        //     'transform': 'translateY(' + scrolled * -0.5 + 'px)'
        // })
    }   

  },  
  components: {
    canvas_bg
  }

}

</script>

<style scoped lang="scss">
  
  @import "../assets/css/elements/settings.scss";

  .web-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .web-item {
    display: flex;
    height: 42vmax;
        // border: 1px solid;

    &__text {
      flex-basis: 50%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 60px 0;      
      &:hover {
        .web-item__link {
          box-shadow: inset 0px -1px 0px 0px #009cff;
        }
      }
    }
    &__name {
      font-family: GilroyBold;
      font-size: 2.13333rem;
      color: $blue;
      margin-top: auto;
      max-width: 20rem;
      margin-bottom: 0.933333rem;  
    }
    &__desc {
      max-width: 20rem;  
      font-size: 0.866667rem;  
      margin-bottom: 2rem;

    }
    &__link {
      font-family: MinionPro;
      box-shadow: inset 0px -1px 0px 0px #666666;
      text-shadow: 0px 4px 20px #fff;
      color: #666666;
      line-height: 0.8;
      color: #666666;
    }
    &__date {
      font-family: MinionPro;
      font-size: 0.866667rem;
      color: #c2c2c2;
      margin-top: auto;
    }
    &__image {
      flex-basis: 50%;
      overflow: hidden;
      position: relative;
      &-back {
        position: absolute;
        will-change: transform;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #fff;
        z-index: 1;
        opacity: 0;
        transition: none;
        &--fade {
          opacity: 0;
        } 
      }
      img {
        @extend %img;
        will-change: transform;
        position: relative;
        top: -27vmax;
        height: 88vmax;
        backface-visibility: hidden;
      }
    }    
  }
</style>
