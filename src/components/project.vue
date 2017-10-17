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
				
					<a href='' class="desc desc--link">www.pobeda.aero</a>
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
			close_svg: close_svg
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
  		var animateElems = document.querySelectorAll('.project-image-item--small')



  		var count = 0
  		for (var item of animateElems) {
  			count++
			var tl = new TimelineMax()

	  		var scene = new ScrollMagic.Scene({
	                  triggerElement: item,
	                  // scrollOffset: 100,
	                  duration: '200%',
	                  triggerHook: .9
	                  })
	               
	          
	        if (count % 2 === 0) {
				scene.setTween(TweenMax.to(item.querySelector('img'), 1, {y: '-35%', ease:Power0.easeNone}))	        	
	        }
	        else {
				scene.setTween(TweenMax.to(item.querySelector('img'), 1, {y: '-35%', ease:Power0.easeNone}))	        	
	        }
	       

	              scene.addTo(controller);
  		}


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

</script>

<style scoped lang="scss">
	
	@import "../assets/css/elements/settings.scss";

.bgCanvas {
	display: none;
}
.project-enter-active, .project-leave-active {
  transition-property: opacity;
  transition-duration: 14s;
}

.project-enter-active {
  transition-delay: 13s;
}

.project-enter, .v-leave-active {
  opacity: 0
}	

	.project-top {
		
		display: flex;
		position: relative;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		z-index: 1;
		color: #fff;
		padding: 0 4rem;
	    box-sizing: border-box;
		font-family: GilroyBold;
		justify-content: center;
		overflow: hidden;
		
		
		&__image {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: -1;
			top: -10vmax;	
			img {
				@extend %img;
			    object-position: top;
			}
			&:after {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				top: 0;				
				background-color: #000;
				opacity: .2;
				z-index: 0;
			}			
			
		}
		&__title, &__desc {
			position: relative;
			z-index: 1;
			margin-left: 10.4rem;			

		}
		&__title {
			font-size: 4.93333rem;
			margin-bottom: 0.933333rem;	
		}
		&__desc {
			font-size: 1.33333rem;
			line-height: 1.6rem;
			max-width: 32.6667rem
		}
		&__close {
			z-index: 1;
			position: absolute;
			right: 4rem;
			top: 47px;

		    cursor: pointer;
		    &:hover {
		    	opacity: .7;
		    }
		}
	}
	.project-desc-section {
		font-family: GilroyBold;
		max-width: 55.3333rem;
		margin: 0 auto;
		margin-bottom: 4.13333rem;
		padding-top: 140px;
		box-sizing: border-box;
		&__row {
			margin-bottom: 8.13333rem;
			display: flex;
			flex-wrap: wrap;
		}	
		&__date {
		    margin-top: 169px;
		    font-family: MinionPro;
			color: $grayHover;
			font-size: 0.866667rem;
		}

		&__col {
			flex-basis: 50%;
			flex-grow: 1;
			&--small {
			    flex-basis: 120px;
			    margin-left: auto;
			    flex-grow: 0;
			}
		}
		&__text-1 {
			line-height: 34.12px;
			font-size: 0.933333rem;		
			color: #666666;
		}
		&__text-2 {
			font-family: CYPro;
			font-size: 0.866667rem;
			color: #939393;
			line-height: 1.422rem;
		}
		&__name {
			width: 100%;
			color: $blue;				
			font-size: 1.33333rem;	
			margin-bottom: 1.53333rem;
		}

	}
	.project-name {
		font-size: 1.13333rem;
		color: #666666;
		font-family: GilroyBold;
		margin-bottom: 20px;
	}

	.project-big-image {
		width: 100%;
		height: 100vh;
		position: relative;
		display: flex;
		margin-bottom: 10.8rem;		
		overflow: hidden;
		&--paralax {
			img {
				top: -30vmax;
			}
		}	
		&:after {
			// @extend %opacity-img;
			// opacity: 0.2;
		}		
		&__image {
			position: absolute;
			left: 0;
			@extend %img;

		}	
		&__text-wrap {
			margin-top: auto;
			z-index: 1;
			max-width: 544px;
			width: 100%;
			padding-bottom: 3.8rem; 
			padding-left: 7.13333rem;
			z-index: 10;
			&--two {
				margin-left: auto;
			}
		}
		&__name {
			// color: #fff;
		}	
		&__desc {
			// color: #fff;
			line-height: 21.33px;
		}

	}
	.project-image-item {
		display: flex;
		height: 24vmax; 
		&--small {
			margin-bottom: 10.6667rem;
			&:nth-child(even) {
				.project-image-item__image {
					order: 2;
				}
			}
		}
		&--big {
			height: 39vmax; 
			margin-bottom: 4rem;
			&:nth-child(even) {
				.project-image-item__image {
					order: 2;
				}
			}			
		}
		&__text {
			max-width: 27.5333rem;
			width: 100%;
		}
		&__text-wrap {
			flex-basis: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		&__image {
			flex-basis: 50%;
			img {
				will-change: transform;
				@extend %img;
			    object-position: center;
			}
		}
	}
	.project-images-block {
		width: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 0 7rem;		
	}
	.project-bottom-image {
		width: 100%;
		height: 21vmax;
		overflow: hidden;
		img {
			top: -50%;
			position: relative;		
			@extend %img;
			height: 120%;	
		}
	}
	.project-other-projects {
		width: 100%;
		height: 21vmax;
		display: flex;
		color: #fff;
		&__col {
			flex-basis: 50%;
			box-sizing: border-box;
			padding: 30px 60px; 
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			&:hover {
				img {
					transform: scale(1);
				}
			}			
		}
		&__image {
			transition: 0.7s;
			transform: scale(1.1);
			position: absolute;
			top: 0;
			left: 0;
			@extend %img;
			z-index: -1;

		}
		&__text-wrap {
			margin-top: auto;
			z-index: 2;
		}
		&__big-text {
			font-size: 1.86667rem;
			font-family: GilroyBold;
			margin-bottom: 15px;
		}
		&__small-text {

		}
	}


</style>

