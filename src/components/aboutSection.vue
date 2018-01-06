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
				<p class="d-text__1 d-text__mobile">
					Our studio is focused on small, medium and large businesses as well as public services. Among our clients — companies, each of which is a leader in its industry. A major part of our work is the constant communication with the customer at every stage of the work.						
				</p>				
				<a class="big-text-section__link big-text-section__link--border" href="">
					See our projects
				</a>
			</div>
		</div>
	</div>
	
	<div class="big-image paralax">
		<img src="../assets/img/ab1.png" alt="">
	</div>

	<main class="big-text-section big-text-section--center w2">
		<div class="big-text-section__center-wrapper">
			<div class="big-text-section__left-side
			big-text-section__center-wrapper--top-align">
				<div class="big-text-section__left-text">
					<p class="d-text__1">
						Our studio is focused on small, medium and large businesses as well as public services. Among our clients — companies, each of which is a leader in its industry. A major part of our work is the constant communication with the customer at every stage of the work.						
					</p> 
					<br>
					<p class="d-text__2">
						We learn from the client as much information about its business and its target audience to correct accents and bring in the desired project the whole soul of the company and create a product that brings a new level of sales.	
					</p>
									
				</div>
			</div>
			<div class="big-text-section__right-side">
				<div class="big-text-section__right-wrap-services
				big-text-section__center-wrapper--top-align">
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
			<a href="0" data-old-href="0" class="slides-block__item slides-block__item--wide"><img src="../assets/img/3b8a603507428c1b7af4b80e981f75f9--photography-minimal-symmetry-photography.png" alt=""></a>			
		</div>
	</div>

	<div class="big-text-section big-text-section--low w3">

		<div class="big-text-section__right-side">
			<a href="" class="big-text-section__link big-text-section__link--arrow">
				<span class="big-text-section__link-arrow ">
		            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		               viewBox="0 0 665.1 110" style="enable-background:new 0 0 265.1 110;" xml:space="preserve">
		            <g id="call-made_1_">
		              <polyline points="243.7,47.2 0,47.2 0,62.7 243.7,62.7   "/>
		            </g>
		            <polygon id="arrow" points="210.2,0.1 199.3,11 243.4,55 199.3,99.1 210.2,110 265.1,55 "/>
		            </svg>					
				</span>
				<span class="big-text-section__link--border">See all projects</span>
			</a>
		</div>
	</div>	

  </div>
</template>
    

<script>
import render_svg from '../assets/js/render_svg.js'
// import arrow_blue from '../assets/img/arrow_blue.svg'

const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
import * as anim from '../assets/js/arrow_animation.js'

export default {
  name: 'aboutSection',

  data: function() {
  	return {
  		// hrefLastItem: ''
  	}
  },
  mounted() {
  	
    setTimeout(()=>{
      window.scrollTo(0, 0)
    }, window.scrollTime)

    if ($('.bgCanvas').hasClass('pause') && window.pageYOffset <= 100) {
        $('.bgCanvas').removeClass('pause')
          CapitolTriangles.triangles.start()    
    }  	
    


	        $(document).on('mouseenter', '.big-text-section__link--arrow', function(e) {
	        	console.log(e)
	          anim.arrow_anim_start(e)
	        })

	        $(document).on('mouseleave', '.big-text-section__link--arrow', function(e) {
	          anim.arrow_anim_finish(e)
	        })	        


	        if ($(window).width() > 650) {
  		var controller = new ScrollMagic.Controller();
  		const paralax_img = document.querySelector('.paralax img')
  		const paralax = document.querySelector('.paralax')

  		var scene = new ScrollMagic.Scene({
                  triggerElement: paralax,
                  // scrollOffset: 100,
                  duration: '180%',
                  triggerHook: 1
                  })
               
              .setTween(TweenMax.to(paralax_img, 1, {y: '90%', ease:Power0.easeNone}))

              .addTo(controller);    	        	
	        	var last_slide = $('.slides-block__item').last() 
		        last_slide.addClass('slides-block__item--see-all') 	
		        last_slide.append($('.big-text-section__link--arrow').clone())
	        }
	        // else {
	        	// $('.hello_section, .big-text-section').height(screen.height)
	        // }
  }

}

</script>



