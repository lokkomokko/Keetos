<template>
	<div class="menu">
		<div class="artclose">

	      <div class="burgx"></div>
	      <div class="burgx2"></div>
	      <div class="burgx3"></div>

		</div>
		<div class="nav_wrap">
			<router-link class="home-link" to="/">
				<div class="logo" v-html="logo"></div>
			</router-link>
			<a href="" class="mobile-lang">ru</a>
			<nav>
				<ul>
					<li class="menu_link"><router-link :to="{ name: 'root' }">About</router-link></li>
					<li class="menu_link"><router-link :to="{ name: 'design' }">Design</router-link></li>
					<li class="menu_link"><router-link :to="{ name: 'website' }">Website</router-link>
					<li class="menu_link"><router-link to="">Branding</router-link></li>

				</ul>
			</nav>
      <div class="separator"></div>
			<div class="contact_block">
				<p class="top">Already ready to work with us?</p>
				<a class="title" href="">contact us</a>
			</div>
			
			<div class="mail-wrapper">
				<a class="mail" href="mailto:contact@keetos.ru">contact@keetos.ru</a>
		      <div class="mobile-header-social__wrapper">
		        <a href="" class="footer__social-item"><span v-html="vk"></span></a>
		        <a href="" class="footer__social-item fb"><span v-html="fb"></span></a>
		        <a href="" class="footer__social-item inst"><span v-html="inst"></span></a>
		        <a href="" class="footer__social-item"><span v-html="be"></span></a>
		      </div>				
			</div>

		</div>

	</div>	
</template>

<script>

import render_svg from '../assets/js/render_svg.js'
import logo from '../assets/img/logo_for_menu.svg';
import vk from '../assets/img/004-vk-social-network-logo.svg'
import fb from '../assets/img/005-facebook-logo.svg'
import inst from '../assets/img/001-instagram-logo.svg'
import be from '../assets/img/003-behance-logo.svg'

const rendered = `
<svg viewBox="${logo.viewBox}">
  <use xlink:href="#${logo.id}" />
</svg>`;

export default {
  name: 'menuTemplate',
  data() {
  	return {
      logo: rendered,
      vk: render_svg(vk),
      fb: render_svg(fb),
      inst: render_svg(inst),
      be: render_svg(be),      
  	}
  },
  mounted: function() {
  	menuScript()
  }

}

import 'jquery.transit'

// window.onload = function() {


// меню
var menuScript = function() {
	var toggled = 0;

	$('.artclose').click(function(){
	  if(toggled == 0){
	  $('.burgx3').stop().transition({rotate: "45", "margin-top": "11px", 'background-color': '#009cff'});
	  $('.burgx2').stop().transition({opacity: "0", 'background-color': '#009cff'}, "fast");
	  $('.burgx').stop().transition({rotate: "-45", "margin-top": "11px", 'background-color': '#009cff'});
	  $('.burgx').css('width', '28px');
	  $('.nav_wrap').addClass('open');
	  $('.wrapper').addClass('opacity');

	    toggled++;
	  }
	  else{
	  $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px", 'background-color': '#fff'});
	  $('.burgx2').transition({opacity: "1", 'background-color': '#fff'}, "fast");
	  $('.burgx').stop().transition({rotate: "-=135", "margin-top": "20px", 'background-color': '#fff'});
	  $('.burgx').css('width', '21px');
	  $('.nav_wrap').removeClass('open');
	  $('.wrapper').removeClass('opacity');
	  toggled--;
	  }
	});	

	$('.menu_link, .home-link').click(function() {
	  $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px", 'background-color': '#fff'});
	  $('.burgx2').transition({opacity: "1", 'background-color': '#fff'}, "fast");
	  $('.burgx').stop().transition({rotate: "-=135", "margin-top": "20px", 'background-color': '#fff'});
	  $('.burgx').css('width', '21px');
	  $('.nav_wrap').removeClass('open');
	  $('.wrapper').removeClass('opacity');	
	  toggled--;
	})
// $(".nav_wrap" )
// .blur(
//     function() {
//       console.log(232323);
//         $( this ).removeClass('open');
//     }
// )
    $(document).on('click', function(e) {

      if ($('.nav_wrap').hasClass('open') && $(e.target).hasClass('wrapper')) {
          $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px", 'background-color': '#fff'});
          $('.burgx2').transition({opacity: "1", 'background-color': '#fff'}, "fast");
          $('.burgx').stop().transition({rotate: "-=135", "margin-top": "20px", 'background-color': '#fff'});
          $('.burgx').css('width', '21px');
          $('.nav_wrap').removeClass('open');
          $('.wrapper').removeClass('opacity'); 
          toggled--;
      } 
      // if (toggled === 1) {

      // console.log(232323)
      // $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px", 'background-color': '#fff'});
      // $('.burgx2').transition({opacity: "1", 'background-color': '#fff'}, "fast");
      // $('.burgx').stop().transition({rotate: "-=135", "margin-top": "20px", 'background-color': '#fff'});
      // $('.burgx').css('width', '21px');
      // $('.nav_wrap').removeClass('open');
      // $('.wrapper').removeClass('opacity'); 
      // toggled--;
      // }

    })

}

// }

</script>

