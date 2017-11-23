<template>
  <div id="app-inner" class="app-inner" :class="{'app-inner--nav': $store.state.navOpen}">
    <nav-top></nav-top>
    <hero></hero>
    <what-we-offer :class="{'what-we-offer--no-blog': !$store.state.blogReady}"></what-we-offer>
    <blog id="recent-news" v-if="$store.state.blogReady"></blog>
    <blog-else></blog-else>
    <about-us></about-us>
    <contact></contact>

    <footer-component></footer-component>

  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import WhatWeOffer from '../components/WhatWeOffer.vue'
  import Blog from '../components/Blog.vue'
  import AboutUs from '../components/AboutUs.vue'
  import Contact from '../components/Contact.vue'
  import NavTop from '../components/NavTop.vue'
  import BlogElse from '../components/BlogElse.vue'
  import FooterComponent from '../components/Footer.vue'

  import Rellax from 'rellax'
  import AOS from 'aos'
  import jump from 'jump.js'

  export default {
    components: {
      Hero,
      WhatWeOffer,
      Blog,
      AboutUs,
      Contact,
      NavTop,
      BlogElse,
      FooterComponent
    }, 

    mounted() {
      
      var rellax = new Rellax('.rellax')
      var aos = AOS.init()
    },
    watch: {
      '$route' (to, from) {
        this.$store.commit('TOGGLE_NAV', false)
        jump('#'+to.path.substring(1))
      }
    }
  }
</script>