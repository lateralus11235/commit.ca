<template>
  <div id="app-inner">
    <nav-top></nav-top>
    <hero></hero>
    <what-we-offer></what-we-offer>
    <about-us></about-us>
    <contact></contact>

  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import WhatWeOffer from '../components/WhatWeOffer.vue'
  import AboutUs from '../components/AboutUs.vue'
  import Contact from '../components/Contact.vue'
  import NavTop from '../components/NavTop.vue'

  export default {
    components: {
      Hero,
      WhatWeOffer,
      AboutUs,
      Contact,
      NavTop
    }, 
  }
</script>