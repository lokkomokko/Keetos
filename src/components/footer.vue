<template>
  <footer class="footer">
    <div class="footer__left-side">
      <div class="footer__left-wrap">
        <nav class="footer__nav">
              <a class="footer__nav-item" href="">
                <span v-html="part_logo"></span>
              </a>
            <a class="footer__nav-item" href="">About</a>
            <a class="footer__nav-item" href="">Design</a>
            <a class="footer__nav-item" href="">Website</a>
            <a class="footer__nav-item" href="">Branding</a>
          </ul>
        </nav>
        <p class="footer__copyright">
          Все права защищены © 2017.
        </p>        
      </div> 
    </div>
    <div class="footer__right-side">
      <div class="footer__social">
        <a href="" class="footer__social-item"><span v-html="vk"></span></a>
        <a href="" class="footer__social-item fb"><span v-html="fb"></span></a>
        <a href="" class="footer__social-item inst"><span v-html="inst"></span></a>
        <a href="" class="footer__social-item"><span v-html="be"></span></a>
      </div>
    </div>
    
  </footer>
  </div>


</template>


<script>


import render_svg from '../assets/js/render_svg.js'

import part_logo from '../assets/img/O.svg'
import vk from '../assets/img/004-vk-social-network-logo.svg'
import fb from '../assets/img/005-facebook-logo.svg'
import inst from '../assets/img/001-instagram-logo.svg'
import be from '../assets/img/003-behance-logo.svg'
// import o_svg from '../assets/img/O.svg'



export default {
  name: 'footer_block',
  data () {
    return {
      vk: render_svg(vk),
      fb: render_svg(fb),
      inst: render_svg(inst),
      be: render_svg(be),
      // o_svg: render_svg(o_svg),
      part_logo : render_svg(part_logo)
    }
  },

}

</script>

<style lang="scss">

  @import "../assets/css/elements/settings.scss";

  .footer {
    color: $gray;
    display: flex;
    height: 12.8rem;

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
      padding-left: 7rem;      
    } 
    &__right-side {
      justify-content: flex-start;
      box-sizing: border-box;
      padding-left: 60px;
    }

    &__social-item {
      margin-right: 16px;
      display: flex;

      &:hover {
        svg {
          fill: $grayHover;
        }
      }      
      span {
      }
      svg {
        width: 18px;
        fill: $gray;
        transition: .3s;
      } 
    }
    &__social {
        display: flex;      
        height: 72px;
        align-items: flex-start;
        margin-top: -1px;
    }
    &__nav {
      display: flex;
      margin-bottom: 2.66667rem;
    }
    &__nav-item {
      display: block;
      margin-right: 2.6rem;      
      font-family: GilroyBold;
      font-size: 1rem;
      position: relative;
      // box-shadow: inset 0px -1px 0px 0px #a4a4a4;
      // border-bottom: 1px solid #a4a4a4;
      transition: .3s;
      &:after {
        content: '';
        position: absolute;
        height: 1px;
        background-color: #a4a4a4;   
        left: 0;
        right: 0;
        bottom: 2px;
      }
      &:first-of-type {
        &:after {
          content: none;
        }
        // box-shadow: none;
        // border-bottom: 1px solid transparent;
      }
      span {
        
        svg {
          width: 17px; 
          fill: #a4a4a4;
         
        }        
      }
      &:hover {
        color: $grayHover;
        // box-shadow: inset 0px -1px 0px 0px $grayHover;
        &:after {
          background-color: $grayHover;
        }        
        &:first-of-type {
          opacity: 0.5;
        }        
      }
      
    }
    &__copyright {
      font-size: 0.8rem;
      position: relative;
      top: 17px;      
    }

  }
  .fb {
    svg {
      width: 15px;
    }
  }
  .inst  {
    position: relative;
    top: 2px;
    svg {
      width: 13px;
    }
  }

</style>
