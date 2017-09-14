<template>
	<div class="bgCanvas"></div>
</template>


<script>
require('../assets/js/runBg.js')

export default {
  name: 'canvas_bg',
  
  mounted: function() {
		CapitolTriangles.triangles = new CapitolTriangles();

		$('.bgCanvas').html(CapitolTriangles.triangles.el);

		CapitolTriangles.triangles.start()
		 CapitolTriangles.triangles.resize();
  }


}


</script>

