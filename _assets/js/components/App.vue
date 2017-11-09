<template>
  <div id="app-inner" :class="{'app-inner--nav': $store.state.navOpen}">
    <nav-top></nav-top>
    <hero></hero>
    <what-we-offer></what-we-offer>
    <blog></blog>
    <about-us></about-us>
    <contact></contact>

  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import WhatWeOffer from '../components/WhatWeOffer.vue'
  import Blog from '../components/Blog.vue'
  import AboutUs from '../components/AboutUs.vue'
  import Contact from '../components/Contact.vue'
  import NavTop from '../components/NavTop.vue'

  export default {
    components: {
      Hero,
      WhatWeOffer,
      Blog,
      AboutUs,
      Contact,
      NavTop
    }, 
  }
</script>