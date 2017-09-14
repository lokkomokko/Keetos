<template>
  <div>
	<div class="big-text-section">
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

	<main class="big-text-section">
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
		<div class="slides-block__item"><img src="../assets/img/ab2.png" alt=""></div>
		<div class="slides-block__item"><img src="../assets/img/ab3.png" alt=""></div>
		<div class="slides-block__item"><img src="../assets/img/ab4.png" alt=""></div>
		<div class="slides-block__item"><img src="../assets/img/ab5.png" alt=""></div>
	</div>

	<div class="big-text-section big-text-section--low">
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

<style scoped lang="scss">

	@import "../assets/css/elements/settings.scss";

	.big-text-section {
		height: 100vh;
		width: 100%;
		position: relative;
		box-sizing: border-box;
		display: flex;
		overflow: hidden;	
		color: #666666;
		&--low {
			height: 21vmax;
		}
		&__left-side, &__right-side {
			display: flex;
			flex-basis: 50%;
			align-items: center;
		}	
		&__left-side {
			justify-content: center;
		}
		&__right-side {
			justify-content: flex-start;
		}
		&__right-wrap {
			width: 70%;
			padding-left: 4rem;
		}
		&__right-wrap-services {
		    margin: auto;			
		}
		&__title {
			font-size: 4.8rem;
			color: $blue;
			margin-top: -3.06667rem;
			font-family: GilroyBold;
		}
		&__desc {
			margin-bottom: 1.53333rem;
			font-family: GilroyBold;
			line-height: 1.4rem;
		}
		&__link {
			font-family: MinionPro;
			font-size: 1rem;
			text-decoration: underline;	
			&--arrow {
				display: flex;
				margin: auto;
			}
		}
		&__left-text {
			width: 61%;
			font-size: 0.866667rem;
			line-height: 1.4rem;
			margin-left: auto;
			padding-right: 4rem;
		}
		&__right-title {
			font-family: GilroyBold;
			font-size: 1rem;
			margin-bottom: 1.4rem;
		}
		&__right-services-name {
			line-height: 1.4rem;
			font-size: 0.866667rem;
			&:before {
				content:'-';
				color: $blue;
			}
		}
		&__link-arrow {
			display: block;
			width: 1.33333rem;
			margin-right: 1.4rem;

		}
	}

	.big-image {
		width: 100%;
	    height: 41.6vmax;
	    overflow: hidden;
		img {
			@extend %img;
		}
	}

	.slides-block {
		height: 21vmax;
		width: 100%;
		display: flex;
		&__item {
			flex-basis: 25%;
		}
		img {
			@extend %img;
			
		}
	}
</style>


