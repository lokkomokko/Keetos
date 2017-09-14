<template>
    <div class="contact-us">
      <div class="contact-us__left-side">
        <a href='' class="contact-us__left-wrap">
          <div class="contact-us__arrow" v-html="contact_arrow"></div>
          <div class="contact-us__desc contact-desc">
            Already ready to work with us?
          </div>
          <div class="contact-us__title contact-title">
            Contact us
          </div>              
        </a>            
      </div>
      <div class="contact-us__right-side">

          <a href="mailto:hello@keetos.ru" class="contact-us__mail contact-mail">hello@keetos.ru</a>
        
      </div>
    </div>
</template>


<script>

import contact_arrow from '../assets/img/contact-arrow.svg'

const rendered = `
<svg viewBox="${contact_arrow.viewBox}">
  <use xlink:href="#${contact_arrow.id}" />
</svg>`;


export default {
  name: 'contact_us',
  data: function() {
    return {
      contact_arrow: rendered
    }
  }
}

</script>

<style lang="scss">
.contact-us {
  position: relative;
  width: 100%;
  height: 21vmax;
  background-color: #4b75ff;
  color: #fff;
  display: flex;

  &__left-side, &__right-side  {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    
  }
  &__left-side {
    justify-content: center;
    flex-direction: column;
    text-align: left;
      align-items: flex-start;
      box-sizing: border-box;
      padding-left: 13rem;
  } 
  &__right-side {
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 60px;
  }
  &__left-wrap {
    position: relative;
    &:hover {
      .contact-us__arrow {
        transform: translateX(25px) scale(1.6);

      }
    }   
  }

  &__desc {
    margin-bottom: 0.4rem;
  }
  &__arrow {
    width: 46px;
    position: absolute;
    left: -6.13rem;
    cursor: pointer;
    top: 0.6rem;
    transition: .3s;


  }
  &__title {
    
  }
  &__mail {

  }   
}

.contact-desc {
  font-family: Gilroy;
  font-size: 0.866667rem;
  font-style: italic;
}
.contact-title {
  font-family: GilroyBold;
  text-transform: uppercase;
  font-size: 1.86667rem;
}

.contact-mail {
  text-decoration: underline;
  font-family: GilroyBold;
  font-size: 1rem;
}

  
</style>


