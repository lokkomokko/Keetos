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

<style scoped lang="scss">

	@import "../assets/css/elements/settings.scss";

  .menu {
    .artclose {
      position: fixed;
      left: 4rem;
      top: 3.7rem;
      cursor: pointer;
      width: 50px;
      height: 34px;
      z-index: 30;
      transition: .3s; 
      
      &:hover {
        opacity: .7;
      }

    }
    .nav_wrap {
      position: fixed;
      z-index: 20;
      bottom: 0;
      left: 0;
      top: 0;
      background-color: #fff;
      display: flex;
      max-height: 100vh;
      flex-direction: column;
      justify-content: space-between;
      padding: 8rem 0 3.9em;
      box-shadow: 30px 0 128px rgba(0, 0, 0, 0.14);
      max-width: 50vw;
      width: 100%;
      transform: translateX(-57vw);
      transition: .5s all;
        &.open {
          transform: translateX(0);
        }
        ul {
        display: flex;
        flex-direction: column;
        }
        .logo {
          width: 105px;
          height: 22px;
          position: absolute;
          right: 4rem;
          top: 3.8rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      nav {
        // margin-top: 13.4rem;
      }
      .menu_link {
        padding: 0 7.5rem;
        position: relative;
        margin-bottom: 0.4em;		
        line-height: 3.6875rem;
        &:last-of-type {
          margin-bottom: 0;  
        }
        &:hover {
          &:before {
            transform: scaleX(1)
          }
        }
        &:before {
          content: '';
          transition: .3s;
          height: 1px;
          background-color: $blue;
          width: 4.3rem;
          position: absolute;
          left: 0;
          top: 50%;
          transform: scaleX(0);
          transform-origin: 0;
          
        }       
      }
      .contact_block {
        display: flex;
        flex-direction: column;
        margin-left: 7.5rem;
        p {
          font-family: Gilroy;
          font-size: 0.866667rem;
          color: #939393;
          font-style: italic;
          margin-bottom: 10px;
        }
        .title {
          font-family: GilroyBold;
          color: #424242;
          text-transform: uppercase;
          font-size: 1.86667rem;
          transition: .3s;
          &:hover {
            opacity: .7;
          } 
        }
      }
      .mail {
        color: $blue;
        text-decoration: underline;
        font-family: GilroyBold;
        font-size: 1rem;
        margin-left: 7.5rem;
        transition: .3s;
        &:hover {
          opacity: .7;
        }         

      }   
      .separator {
        background-color: #e6e6e7;
        height: 1px;
        width: 38px;
        margin-left: 7.5rem;
        margin-top: -0.4rem;
      } 
    }
  }


.artclose {
height: 30px;
  width: 33px;
  cursor: pointer;
  &--blue {
    .burgx, .burgx2, .burgx3 {
      background-color: $blue !important;
    }
  }
}

.burgx, .burgx2, .burgx3 {
  margin-top: 3px;
  background: #fff;
  width: 28px;
  height: 3px;
  position: absolute;
  transition: 0.2s;
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
}
.burgx {
  width: 21px;
  margin-top: 20px;

}
.burgx2 {
 margin-top: 11.3px;
}
.burgx3 {
  margin-top: 3px;   
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
.menu_link {
  color: $blue;
  font-family: GilroyBold;
  font-size: 3.33333rem;
  display: inline-block;
  a {

    &:hover {
      animation: animate_menu_link .5s;
    }   
  }
}	
</style>