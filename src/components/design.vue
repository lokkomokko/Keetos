<template>

		  <div>
        <!-- <canvas_bg></canvas_bg> -->
        <!-- верхняя секция главная -->
        <div class="hello_section hello_section--page-item">

          <div class="logo_wrap page-header">
            <div class="page-header__empty"></div>
            <div class="page-header__wrapper">
              <div class="page-header__left-section">
                <h1 class="page-header__left-section__h1">Design</h1>
              </div>      
              <div class="page-header__right-section">
                <h3 class="page-header__right-section__title">Тут ничего не написано</h3>
                <p>
                  Здесь нужно написать, что представлены все работы в куче и что типа смотрите и главное связывайтесь с нами, а то мы обидимся и наш программист взломает вас к чертям с убунты.
                  <br><br>
                  Enjoy!          
                </p>
              </div>        
            </div>
          </div>
          <div class="bottom_section">
            <div class="desc">Дружба. Жвачка. Газпром</div>
            <div class="scroll"><img src="../assets/img/scroll.png" alt=""></div>
            <div class="lang">
              <a href="#"></a>
            </div>
          </div>
        </div>
  
        
        <div class="g-items">
           <a href="" data-project-link="project" class="g-items__single item-block">
            <div class="item-block__elem">
              <img class="test" src="../assets/img/1.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Побеsда</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </div>
           </a>

           <div class="g-items__single item-block">
            <a href="1" class="item-block__elem">
              <img src="../assets/img/2.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </a>
            <a href="2" class="item-block__elem">
              <img src="../assets/img/3.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Длинное название какого-то проекта</h2>
                <p>Самое длинное описание проекта под длинным названием какого-то проекта</p>     
              </div>    
            </a>  
           </div> 

           <a href="" class="g-items__single item-block">
            <div class="item-block__elem">
              <img src="../assets/img/4.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </div>
           </a> 

           <a href="" class="g-items__single item-block">
            <div class="item-block__elem">
              <img src="../assets/img/5.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </div>
           </a> 

           <div href="" class="g-items__single item-block">
            <a href="" class="item-block__elem">
              <img src="../assets/img/6.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </a>
            <a href='' class="item-block__elem">
              <img src="../assets/img/7.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </a>  
           </div>   


           <a href="" class="g-items__single item-block">
            <div class="item-block__elem">
              <img src="../assets/img/8.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </div>
           </a>

           <a href="" class="g-items__single item-block">
            <div class="item-block__elem">
              <img src="../assets/img/9.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </div>
           </a>

           <a href="" class="g-items__single item-block">
            <div class="item-block__elem">
              <img src="../assets/img/10.png" alt="">
              <div class="item-block__elem__desc">
                <h2>Победа</h2>
                <p>Российский авиаперелетчик</p>      
              </div>    
            </div>
           </a>                
        </div>

		  </div>		

</template>


<script>

import canvas_bg from './canvas'
const ScrollMagic = require('ScrollMagic')

export default {
  name: 'design',
  data () {
    return {

    }
  },
  mounted: function() {
    
    //  var controller = new ScrollMagic.Controller();
    // controller.enabled(false);
    if ($('.bgCanvas').hasClass('pause') && window.pageYOffset <= 100) {
        $('.bgCanvas').removeClass('pause')
          CapitolTriangles.triangles.start()    
    }



    const that = this
    $(".scroll").click(function() {
      var block_height = $(".hello_section").height(); 

        $('html, body').animate({
            scrollTop: block_height
        }, 700);
    }); 
    var items_project = document.querySelectorAll('.g-items a')
    for (const item of items_project) {

      item.onclick = function(e) {
       e.preventDefault(); 
        e.stopPropagation();

        // console.log(item.getAttribute('data-project-link'))
        var tl = new TimelineMax()
          tl.to(item, 1, {autoAlpha: 0, onComplete: go_route})
          function go_route() {
            that.$router.push({name: 'project', params: { userId: 123 }})
          }

      }
    }
    // document.querySelectorAll('.item-block__elem').click((e)=> {
    //   e.prevendDefault()
    //   console.log(23232)
    // })

  },  
  components: {
    canvas_bg
  }

}




</script>

