<template>
  <section class="hero">
    <div class="container hero__main">
      <div class="row">
        <div class="column large-10 large-offset-1">  
          <h1>
            Deliver your most complex outcomes successfully!
          </h1>
        </div>
      </div>
    </div>

    <div class="wave">
      
    </div>

    <div class="wave wave--bg">
      <svg class="wave__svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 28"
           preserveAspectRatio="none">
       <defs>
       <path id="gentle-wave"
       d="M-160 44c30 0 
          58-18 88-18s
          58 18 88 18 
          58-18 88-18 
          58 18 88 18
          v44h-352z" />
        </defs>
        <g class="parallax">
         <use class="wave__main wave__main--bg" xlink:href="#gentle-wave" x="50" y="0" fill="#85b3c5"/>
         <!--
         <use xlink:href="#gentle-wave" x="50" y="3" fill="#84b2c5"/>
         <use xlink:href="#gentle-wave" x="50" y="6" fill="#85b3c5"/>  

         -->
        </g>
      </svg>
    </div>
    <div class="wave">
      <svg class="wave__svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 28"
           preserveAspectRatio="none">
       <defs>
       <path id="gentle-wave"
       d="M-160 44c30 0 
          58-18 88-18s
          58 18 88 18 
          58-18 88-18 
          58 18 88 18
          v44h-352z" />
        </defs>
        <g class="parallax">
         <!--
         <use xlink:href="#gentle-wave" x="50" y="0" fill="#85b3c5"/>
         -->
         <use class="wave__main wave__main--1" xlink:href="#gentle-wave" x="50" y="0" fill="#85b3c5"/>
         <use class="wave__main wave__main--2" xlink:href="#gentle-wave" x="50" y="3" fill="#84b2c5"/>
         <use class="wave__main wave__main--3" xlink:href="#gentle-wave" x="50" y="6" fill="#85b3c5"/>  
        </g>
      </svg>
    </div>
    <div class="iceberg">
      <div class="iceberg__inner">
        <div class="iceberg__innest"></div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    
  }
</script>