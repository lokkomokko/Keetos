<template>


	<div>
			
		<div class="project-top">
			<div class="project-top__image">
				<img  src="../assets/img/p1.png" alt="">				
			</div>
			<transition appear>
				<h1 class="project-top__title">Победа </h1>			
			</transition>	
			<transition appear>
				<p class="project-top__desc">
					Российский авиаперевозчик и дешевые билеты  в Сочи
				</p>
			</transition>
			<transition appear>
				<router-link class="project-top__close" to="/design">
					<img :src="close_svg" alt="close">
				</router-link>			
			</transition>

			<transition appear>
			
				<div class="bottom_section bottom_section--project">
				
					<a href='' class="desc desc--link big-text-section__link--border">www.pobeda.aero</a>
					<div class="scroll"  v-scroll-to="{
					el: '.project-desc-section',
				     duration: 1000}"
	     ><img src="../assets/img/scroll.png" alt=""></div>
					<div class="lang">
						<a href="#">RU</a>
					</div>
				</div>			
			</transition>

		</div>

		<div class="project-desc-section w5">
			<div class="project-desc-section__row">
					<p class="project-desc-section__name">
						Задача:
					</p>				
					<p class="project-desc-section__text-1">
						Что нужно было сделать и так далее долгое сложное описание, чем сложнее, тем лучше. Правила авиакомпании предусматривают взимание платы за провоз в салоне рюкзаков, пакетов из Duty Free и прочих предметов, которые не указаны в перечне бесплатной ручной клади.
					</p>						
		
				
			</div>	
			<div class="project-desc-section__row">
				<div class="project-desc-section__col">
					<p class="project-desc-section__name">
						Решение:
					</p>				
					<p class="project-desc-section__text-2">
						Немного меньше текста, что они пришли по адресу и с задачей мы интересно справились и придумали гениальное решение
					</p>						
				</div>
		
				<div class="project-desc-section__col 
							project-desc-section__col--small
				">
					<h3 class="big-text-section__right-title big-text-section__right-title--project-page color-666">Что мы сделали:</h3>
					<h4 class="big-text-section__right-services-name color-93">
						 branding
					</h4>
					<h4 class="big-text-section__right-services-name color-93">
						 desctop version
					</h4>
					<h4 class="big-text-section__right-services-name color-93">
						 mobile version
					</h4>								
				</div>
			</div>	
			
			<div class="project-desc-section__date">
				November 2016
			</div>

		</div>	

		<div class="project-big-image project-big-image">
			<img src="../assets/img/pr1.png" alt="" class="project-big-image__image">
			<div class="project-big-image__text-wrap">
				<h5 class="project-big-image__name project-name">
					Тут общий прикольный мокап
				</h5>
				<p class="project-big-image__desc small">
					Ещё описание под картинкой, что вот такую вот шнягу сделали, браза. Позор и тут ещё чего-нибудь написано. Позор
				</p>				
			</div>
		</div>

		<div class="project-images-block w6">
			<div class="project-image-item project-image-item--small">

				<div class="project-image-item__image">
					<img src="../assets/img/pr2.png" alt="">
				</div>
				<div class="project-image-item__text-wrap">
					<div class="project-image-item__text">
					<h6 class="project-image-item__name project-name">Вот ещё один заголовок</h6>
					<p class="project-image-item__text">
						И описание того, что на картинке ещё раз мелким шрифтом, И тут желательно чтобы было почти до центра экрана описание.
						<br><br>
						Вдруг длинное, к тому же.
					</p>						
					</div>

				</div>
				
			</div>	
			<div class="project-image-item project-image-item--small">
				<div class="project-image-item__image">
					<img src="../assets/img/pr3.png" alt="">
				</div>	
				<div class="project-image-item__text-wrap">
					<div class="project-image-item__text">
					<h6 class="project-image-item__name project-name">Вот ещё один заголовок</h6>
					<p class="project-image-item__text">
						И описание того, что на картинке ещё раз мелким шрифтом, И тут желательно чтобы было почти до центра экрана описание.
						<br><br>
						Вдруг длинное, к тому же.
					</p>						
					</div>

				</div>

			
			</div>

			<div class="project-image-item project-image-item--small">

				<div class="project-image-item__image">
					<img src="../assets/img/pr4.png" alt="">
				</div>
				<div class="project-image-item__text-wrap">
					<div class="project-image-item__text">
					<h6 class="project-image-item__name project-name">Вот ещё один заголовок</h6>
					<p class="project-image-item__text">
						И описание того, что на картинке ещё раз мелким шрифтом, И тут желательно чтобы было почти до центра экрана описание.
						<br><br>
						Вдруг длинное, к тому же.
					</p>						
					</div>

				</div>
				
			</div>					

		</div>

		<div class="project-big-image">
			<img src="../assets/img/pr5.png" alt="" class="project-big-image__image">
			<div class="project-big-image__text-wrap
						project-big-image__text-wrap--two
			">
				<h5 class="project-big-image__name project-name">
					Тут общий прикольный мокап
				</h5>
				<p class="project-big-image__desc small">
					Ещё описание под картинкой, что вот такую вот шнягу сделали, браза. Позор и тут ещё чего-нибудь написано. Позор
				</p>				
			</div>
		</div>




		<div class="project-images-block w8">
			<div class="project-image-item project-image-item--big">

				<div class="project-image-item__image">
					<img src="../assets/img/pr6.png" alt="">
				</div>
				<div class="project-image-item__text-wrap">
					<div class="project-image-item__text">
					<h6 class="project-image-item__name project-name">Вот ещё один заголовок</h6>
					<p class="project-image-item__text">
						И описание того, что на картинке ещё раз мелким шрифтом, И тут желательно чтобы было почти до центра экрана описание.
						<br><br>
						Вдруг длинное, к тому же.
					</p>						
					</div>

				</div>
				
			</div>	
			<div class="project-image-item project-image-item--big">
				<div class="project-image-item__image">
					<img src="../assets/img/pr7.png" alt="">
				</div>	
				<div class="project-image-item__text-wrap">
					<div class="project-image-item__text">
					<h6 class="project-image-item__name project-name">Вот ещё один заголовок</h6>
					<p class="project-image-item__text">
						И описание того, что на картинке ещё раз мелким шрифтом, И тут желательно чтобы было почти до центра экрана описание.
						<br><br>
						Вдруг длинное, к тому же.
					</p>						
					</div>

				</div>

			
			</div>
					

		</div>

		<div class="project-bottom-image">
			<img src="../assets/img/pr8.png" width="1366" alt="">
		</div>

		<div class="project-other-projects">
			<a href="" class="project-other-projects__col">
				<img src="../assets/img/n1.png" alt="" class="project-other-projects__image">
				<div class="project-other-projects__text-wrap">
					<p class="project-other-projects__big-text">
						  <span class="project-other-projects__mobile-arrow project-other-projects__mobile-arrow--left" v-html="arrow_up"></span>
					
						Предыдущий проект
					</p>
					<p class="project-other-projects__small-text">
						Российский авиаперевозчик
					</p>					
				</div>
			</a>

			<a href="" class="project-other-projects__col">
				<img src="../assets/img/n2.png" alt="" class="project-other-projects__image">
				<div class="project-other-projects__text-wrap">
					<p class="project-other-projects__big-text">
						Следующий проект
						  <span class="project-other-projects__mobile-arrow project-other-projects__mobile-arrow--right" v-html="arrow_up"></span>
					</p>
					<p class="project-other-projects__small-text small">
						Российский авиаперевозчик
					</p>					
				</div>
			</a>			
		</div>


	</div>


</template>


<script>
import arrow_up from '../assets/img/arrowleft.svg'
import render_svg from '../assets/js/render_svg.js'
import close_svg from '../assets/img/close.png'
const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
import * as anim from '../assets/js/arrow_animation.js'


export default {
	name: 'project',
	data () {
		return {
			close_svg: close_svg,
			arrow_up: render_svg(arrow_up),
		}
	},
	created() {
		// $('.bgCanvas').hide()

	},
	mounted() {

	    setTimeout(()=>{
	      window.scrollTo(0, 0)
	    }, )
		// $('.bgCanvas').hide()


		    
            CapitolTriangles.triangles.pause()
            $('.bgCanvas').addClass('pause')


  		var controller = new ScrollMagic.Controller();
  		// var animateElems = document.querySelectorAll('.project-image-item--small')



  		if ($(window).width() > 650) {
	  	// 	var count = 0
	  	// 	for (var item of animateElems) {
	  	// 		count++
				// var tl = new TimelineMax()

		  // 		var scene = new ScrollMagic.Scene({
		  //                 triggerElement: item,
		  //                 // scrollOffset: 100,
		  //                 duration: '100%',
		  //                 triggerHook: .5
		  //                 })
		               
		          
		  //       if (count % 2 === 0) {
				// 	scene.setTween(TweenMax.to(item.querySelector('img'), 1, {y: '35%', ease:Power0.easeNone}))	        	
		  //       }
		  //       else {
				// 	scene.setTween(TweenMax.to(item.querySelector('img'), 1, {y: '35%', ease:Power0.easeNone}))	        	
		  //       }
		       

		  //             scene.addTo(controller);
	  	// 	}


	  		const paralax_img = document.querySelector('.project-top__image')
	  		const paralax = document.querySelector('.project-top')

	  		var scene_par = new ScrollMagic.Scene({
	                  triggerElement: paralax,
	                  // scrollOffset: 100,
	                  duration: '100%',
	                  triggerHook: 0
	                  })
	               
	              .setTween(TweenMax.to(paralax_img, 1, {y: '90%', ease:Power0.easeNone}))
	              // .setClassToggle(item, 'web-item__image-back--fade')
	              // .addIndicators()

	              .addTo(controller);   

	  		const paralax_img2 = document.querySelector('.project-bottom-image img')
	  		const paralax2 = document.querySelector('.project-bottom-image')

	  		var scene_par2 = new ScrollMagic.Scene({
	                  triggerElement: paralax2,
	                  // scrollOffset: 100,
	                  duration: '200%',
	                  triggerHook: 1
	                  })
	               
	              .setTween(TweenMax.to(paralax_img2, 1, {y: '90%', ease:Power0.easeNone}))
	              // .setClassToggle(item, 'web-item__image-back--fade')
	              // .addIndicators()

	              .addTo(controller);                 		  			
  		}

	}

}

</script>

<style scoped lang="scss">
	
	@import "../assets/css/elements/settings.scss";

.bgCanvas {
	display: none;
}

</style>

