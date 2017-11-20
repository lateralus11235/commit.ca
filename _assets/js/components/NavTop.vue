<template>
  <div class="nav__top">
    <div class="logo">
      <div class="logo__inner">
        
      </div>
    </div>
    
    <div class="nav__blog">
      <a href="#">Visit blog</a>
    </div>
    <div class="nav__trigger" @click="$store.commit('TOGGLE_NAV')">
      <div class="hamburger" id="hamburger-1" :class="{'is-active': navOpen}">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
    <div class="nav__open" :class="{'nav__open--open': navOpen}">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item">
            <a href="#">What We Offer</a>
          </li>
          <li class="nav__list-item">
            <a href="#">Recent News</a>
          </li>
          <li class="nav__list-item">
            <a href="#">About Us</a>
          </li>
          <li class="nav__list-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div class="sky__wrapper">
        
        <div class="sky sky--menu">
          
          <div class="sky__inner sky__inner--1">
            <div class="sky__bg"></div>
          </div>
          <div class="sky__inner sky__inner--2">
            <div class="sky__bg"></div>
          </div>
          <div class="sky__inner sky__inner--3">
            <div class="sky__bg"></div>
          </div>
          <div class="sky__inner sky__inner--4">
            <div class="sky__bg"></div>
          </div>
          <div class="sky__inner sky__inner--5">
            <div class="sky__bg"></div>
          </div>
          <div class="sky__inner sky__inner--6">
            <div class="sky__bg"></div>
          </div>
          <div class="sky__inner sky__inner--7">
            <div class="sky__bg"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      navOpen() {
        return this.$store.state.navOpen
      }
    },
    data() {
      return {
      }
    }
  }
</script>