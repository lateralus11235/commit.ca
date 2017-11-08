<template>
  <div class="nav__top">
    <div class="logo">
      <div class="logo__inner">
        
      </div>
    </div>
    
    <div class="nav__blog">
      <a href="#">Visit blog</a>
    </div>
    <div class="nav__trigger" @click="navOpen = !navOpen">
      <div class="hamburger" id="hamburger-1" :class="{'is-active': navOpen}">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
    <div class="nav__open" :class="{'nav__open--open': navOpen}">
      <nav>
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
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navOpen: false
      }
    }
  }
</script>