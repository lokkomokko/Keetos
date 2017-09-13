<template>
	<!-- верхняя секция главная -->
	<div class="hello_section">

		<div class="logo_wrap">
			<div class="logo" v-html="logo">

			</div>			
		</div>
		<div class="bottom_section">
		
			<div class="desc">Web design & branding</div>
			<div class="scroll"></div>
			<div class="lang">
				<a href="#">RU</a>
			</div>
		</div>
	</div>


</template>


<script>

import logo from '../assets/img/logo_keetos-02.svg';


const rendered = `
<svg viewBox="${logo.viewBox}">
  <use xlink:href="#${logo.id}" />
</svg>`;

export default {
  name: 'helloSection',
  data() {
  	return {
  		logo: rendered
  	}
  },

}

</script>

<style lang="scss">
	.hello_section {
		height: 100vh;
		position: relative;
		box-sizing: border-box;
		margin: 0 5em;
		display: flex;
		overflow: hidden;
		&--page-item {
			overflow: initial;

		}
		.logo_wrap {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 1;
			.logo {
				width: 100%;
				height: 100%;
				max-width: 326px;
				max-height: 68px;			
				img {
					width: 100%;
					height: 100%;

				}
			}			
		}
		.bottom_section {
			color: #fff;
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-top: auto;
			margin-bottom: 4.4em;
			position: relative;
		    z-index: 1;
			.lang {
				font-family: GilroyBold;
			}
			.scroll {
				position: absolute;
				left: calc(50% - 11px);
				top: -5px;
				cursor: pointer;
				transition: .3s all;
				width: 24px;
				height: 40px;
				border-radius: 50px;				
				box-shadow: 0px 0px 0px 2px #fff;
				backfacke-visibility: hidden;
				&:before {
					content: '';
					position: absolute;
					top: 8px;
					left: 50%;
					transform: translate(-50%, 0);
					width: 3px;
					height: 10px;
					background-color: white;
					animation: scrollDown 2s infinite;					
				}
				&:hover {
					animation: animate_scroll 2s infinite;
				}
			}
		}
	}	
</style>
