<template>
  <footer class="footer">
    <div class="footer__left-side">
      <div class="footer__left-wrap">
        <nav class="footer__nav">
        <a class="footer__mail" href="">hello@keetos.ru</a>
              <a class="footer__nav-item footer__nav-item--logo" href="">
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
    <div class="mobile__bg">
      <span v-html="part_logo"></span>
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
