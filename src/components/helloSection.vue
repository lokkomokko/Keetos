<template>
	<!-- верхняя секция главная -->
	<div class="hello_section">

		<div class="logo_wrap">
			<div class="logo" v-html="logo">

			</div>			
		</div>
		<div class="bottom_section">
		
			<div class="desc">Web design & branding</div>
			<div class="scroll"><img src="../assets/img/scroll.png" alt=""></div>
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
  mounted: function() {
    $(".scroll").click(function() {
      var block_height = $(".hello_section").height(); 
      console.log(block_height)
        $('html, body').animate({
            scrollTop: block_height
        }, 700);
    }); 
  },  

}

</script>
