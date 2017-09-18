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

      <div class="web-wrap">

        <div class="web-item">
          <a href="" class="web-item__text">
            <h2 class="web-item__name">Победа</h2>
            <p class="web-item__desc">Российский авиаперевозчик</p>
            <span class="web-item__link">Подробнее</span>
            <span class="web-item__date">May 2016</span>
          </a>
          <div class="web-item__image">
            <img src="../assets/img/w1.png" height="595" width="683" alt="">
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
            <img src="../assets/img/w2.png" alt="">
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
            <img src="../assets/img/orig.jpg" alt="">
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
            <img src="../assets/img/w4.png" alt="">
          </div>
        </div>        

      </div>


		  </div>		

</template>


<script>

import canvas_bg from './canvas'

export default {
  name: 'website',
  data () {
    return {
    }
  },
  mounted: function() {
    $(".scroll").click(function() {
      var block_height = $(".hello_section").height(); 
      console.log(block_height)
        $('html, body').animate({
            scrollTop: block_height
        }, 700);
    }); 

    // paralax on webgl
    window.onscroll = function(e) {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        $('.web-item__image img').each(function() {

          console.log( scrolled  - $(this).offset().top)

          if ($(this).offset().top <= scrolled) {
            $(this).css({
            'transform': 'translateY(' + +($(this).offset().top -  scrolled)  * -0.8 + 'px)'} )
          }
          else {
            $(this).css('transform', 'translateY(0)')
          }
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
      img {
        @extend %img;
        will-change: transform;
        height: calc(100% + 10vmax);
        backface-visibility: hidden;
      }
    }    
  }
</style>
