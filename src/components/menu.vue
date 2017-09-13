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
			
			<nav>
				<ul>
					<li class="menu_link"><router-link to="/page">About</router-link></li>
					<li class="menu_link"><a href="">Design</a></li>
					<li class="menu_link"><a href="">Website</a></li>
					<li class="menu_link"><a href="">Branding</a></li>

				</ul>
			</nav>
			<div class="contact_block">
				<p class="top">Already ready to work with us?</p>
				<a class="title" href="">contact us</a>
			</div>
			<div class="separator"></div>
			<a class="mail" href="mailto:contact@keetos.ru">contact@keetos.ru</a>			
		</div>

	</div>	
</template>

<script>

import logo from '../assets/img/logo_for_menu.svg';


const rendered = `
<svg viewBox="${logo.viewBox}">
  <use xlink:href="#${logo.id}" />
</svg>`;

export default {
  name: 'menuTemplate',
  data() {
  	return {
      logo: rendered
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
	  $('.burgx3').stop().transition({rotate: "45", "margin-top": "13px", 'background-color': '#009cff'});
	  $('.burgx2').stop().transition({opacity: "0", 'background-color': '#009cff'}, "fast");
	  $('.burgx').stop().transition({rotate: "-45", "margin-top": "13px", 'background-color': '#009cff'});
	  $('.burgx').css('width', '33px');
	  $('.nav_wrap').addClass('open');
	  $('.wrapper').addClass('opacity');

	    toggled++;
	  }
	  else{
	  $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px", 'background-color': '#fff'});
	  $('.burgx2').transition({opacity: "1", 'background-color': '#fff'}, "fast");
	  $('.burgx').stop().transition({rotate: "-=135", "margin-top": "23px", 'background-color': '#fff'});
	  $('.burgx').css('width', '25px');
	  $('.nav_wrap').removeClass('open');
	  $('.wrapper').removeClass('opacity');
	  toggled--;
	  }
	});	

	$('.menu_link, .home-link').click(function() {
	  $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px", 'background-color': '#fff'});
	  $('.burgx2').transition({opacity: "1", 'background-color': '#fff'}, "fast");
	  $('.burgx').stop().transition({rotate: "-=135", "margin-top": "23px", 'background-color': '#fff'});
	  $('.burgx').css('width', '25px');
	  $('.nav_wrap').removeClass('open');
	  $('.wrapper').removeClass('opacity');	
	  toggled--;
	})

}

// }

</script>