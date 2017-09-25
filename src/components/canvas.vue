<template>
	<div class="bgCanvas"></div>
</template>


<script>
require('../assets/js/runBg.js')

export default {
  name: 'canvas_bg',
  
  mounted: function() {
	console.log('я родился')
		CapitolTriangles.triangles = new CapitolTriangles();

		$('.bgCanvas').html(CapitolTriangles.triangles.el);

		CapitolTriangles.triangles.start()
		 CapitolTriangles.triangles.resize();

		 // window.onscroll = function() {

			//  if (window.pageYOffset >= $(window).height()) {
			//  	if (CapitolTriangles.triangles !== '') {
			//  		console.log('я умер')
			// 	 	$('.bgCanvas div').remove()
			// 	 	CapitolTriangles.triangles.destroy()
			// 	 	CapitolTriangles.triangles = '';			 		
			//  	}
			//  }		 	
			//  else {
			//  	if (CapitolTriangles.triangles === '') {
			//  		console.log('я родился снова(')
			// 		CapitolTriangles.triangles = new CapitolTriangles();

			// 		$('.bgCanvas').html(CapitolTriangles.triangles.el);

			// 		CapitolTriangles.triangles.start()
			// 		 CapitolTriangles.triangles.resize();
			//  	}

			//  }
		 // }
  }


}


</script>

