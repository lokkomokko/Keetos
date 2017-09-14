<template>
  <div>
      <helloSection></helloSection>    
      <aboutSection></aboutSection>	
  </div>
</template>


<script>
import helloSection from './helloSection'
import aboutSection from './aboutSection'


export default {
  name: 'mainTemplate',

  components: {
    
    helloSection,
    aboutSection
  }
}




</script>



