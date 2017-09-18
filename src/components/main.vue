<template>
  <div>
	  <!-- <canvas_bg></canvas_bg>   -->
      <helloSection></helloSection>    
      <aboutSection></aboutSection>	
  </div>
</template>


<script>
import helloSection from './helloSection'
import aboutSection from './aboutSection'
import canvas_bg from './canvas'


export default {
  name: 'mainTemplate',

  components: {
    
    helloSection,
    aboutSection,
    canvas_bg
  }
}




</script>



