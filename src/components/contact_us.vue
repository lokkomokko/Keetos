<template>
    <div class="contact-us">
      <div class="contact-us__left-side">
        <a href='' class="contact-us__left-wrap">
          <div class="contact-us__arrow">
            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 665.1 110" style="enable-background:new 0 0 265.1 110;" xml:space="preserve">
            <g id="call-made_1_">
              <polyline points="243.7,47.2 0,47.2 0,62.7 243.7,62.7   "/>
            </g>
            <polygon id="arrow" points="210.2,0.1 199.3,11 243.4,55 199.3,99.1 210.2,110 265.1,55 "/>
            </svg>
            
          </div>
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

import o_svg from '../assets/img/O.svg'

const rendered = `
<svg viewBox="${o_svg.viewBox}">
  <use xlink:href="#${o_svg.id}" />
</svg>`;


export default {
  name: 'contact_us',
  data: function() {
    return {
      o_svg: rendered
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
    left: 7px;
    // &:after {
    //   content:'';
    //   position: absolute;
    //   left: -7.67rem;
    //   top: 1rem;
    //   height: 2.5px;
    //   background-color: #fff;
    //   width: 46px;
    // }    
    &:hover {
      .contact-us__arrow {
        #arrow {
          transform: translateX(110px);
        }
        #call-made_1_ {
          transform: scaleX(1.5);

        }

      }
    }   
  }

  &__desc {
    margin-bottom: 0.4rem;
  }
  &__arrow {
    width: 130px;
    position: absolute;
    left: -7.13rem;
    cursor: pointer;
    top: 0.95rem;
    // transform: rotate(90deg);
    transition: .3s;

    svg {
      // width: 46px; 
      fill: white;

    }


  }
  &__title {
    
  }
  &__mail {
    margin-top: 22px;
  }   
}
  #arrow {
    transition: .3s;
  }
  #call-made_1_ {
    transition: .3s;
    
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


