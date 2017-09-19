<template>
  <div>
	<div  class="big-text-section w1">
		<div class="big-text-section__left-side">
			<h2 class="big-text-section__title">Studio</h2>
		</div>
		<div class="big-text-section__right-side">
			<div class="big-text-section__right-wrap">
				<p class="big-text-section__desc">
					We are a digital production studio specializing in web design, creation of responsive web projects and branding.
				</p>
				<a class="big-text-section__link" href="">
					See our projects
				</a>
			</div>
		</div>
	</div>
	
	<div class="big-image">
		<img src="../assets/img/ab1.png" alt="">
	</div>

	<main class="big-text-section w2">
		<div class="big-text-section__left-side">
			<p class="big-text-section__left-text">
				Our studio is focused on small, medium and large businesses as well as public services. Among our clients — companies, each of which is a leader in its industry. A major part of our work is the constant communication with the customer at every stage of the work. 
				<br><br>
				We learn from the client as much information about its business and its target audience to correct accents and bring in the desired project the whole soul of the company and create a product that brings a new level of sales.				
			</p>
		</div>
		<div class="big-text-section__right-side">
			<div class="big-text-section__right-wrap-services">
				<h3 class="big-text-section__right-title">We do:</h3>
				<h4 class="big-text-section__right-services-name">
					 Websites
				</h4>
				<h4 class="big-text-section__right-services-name">
					 Logo & branding
				</h4>
				<h4 class="big-text-section__right-services-name">
					 UI & UX
				</h4>
				<h4 class="big-text-section__right-services-name">
					 Responsive design
				</h4>												
				<h4 class="big-text-section__right-services-name">
					 Mobile & Tablet
				</h4>								
			</div>
		</div>
	</main>	
	
	<div class="slides-block">
		<div class="slides-block__left-side">
			<a href='' class="slides-block__item slides-block__item--wide"><img src="../assets/img/s1.png" alt=""></a>
			<a href="" class="slides-block__item"><img src="../assets/img/ab3.png" alt=""></a>
			<a href="" class="slides-block__item"><img src="../assets/img/ab4.png" alt=""></a>
		</div>
		<div class="slides-block__right-side">
			<a href='' class="slides-block__item"><img src="../assets/img/ab2.png" alt=""></a>
			<a href='' class="slides-block__item"><img src="../assets/img/ab3.png" alt=""></a>
			<a href='' class="slides-block__item slides-block__item--wide"><img src="../assets/img/3b8a603507428c1b7af4b80e981f75f9--photography-minimal-symmetry-photography.png" alt=""></a>			
		</div>
	</div>

	<div class="big-text-section big-text-section--low w3">
		<div class="big-text-section__left-side">
			<p class="big-text-section__left-text">
				What makes us different? We really love what we do, and enjoy the process of creating each project with a soul.				
			</p>
		</div>
		<div class="big-text-section__right-side">
			<a href="" class="big-text-section__link big-text-section__link--arrow">
				<span class="big-text-section__link-arrow" v-html="arrow_blue"></span>
				See all projects
			</a>
		</div>
	</div>	

  </div>
</template>
    

<script>
import render_svg from '../assets/js/render_svg.js'
import arrow_blue from '../assets/img/arrow_blue.svg'

export default {
  name: 'aboutSection',
  data: function() {
  	return {
  		arrow_blue: render_svg(arrow_blue)
  	}
  }

}

</script>

<style lang="scss">

	@import "../assets/css/elements/settings.scss";



	.big-image {
		width: 100%;
	    height: 41.6vmax;
	    overflow: hidden;
		img {
			@extend %img;
		}
	}

	.slides-block {
		
		width: 100%;
		display: flex;
		&__left-side, &__right-side {
			flex-basis: 50%;
			display: flex;
			flex-wrap: wrap;	
		}
		&__item {
			height: 21vmax;
			flex-basis: 50%;
			cursor: pointer;
			overflow: hidden;
			&--wide {
				flex-basis: 100%;		
			}
			&:hover {
				img {
					transform: scale(1);
				}
			}
		}
		img {
			transform: scale(1.1);
			transition: 0.7s;
			will-change: transform;
			@extend %img;
			
		}
	}
</style>


