<template>
  <section class="blog">
    <div class="container">
      <div class="row">
        <div class="column large-6">
          <h2>
            Recent News
          </h2>
          <a href="#">Visit our blog for more</a>
        </div>
        <div class="column large-6" v-for="i in 3">
          <div class="blog__top">
            <div class="blog__date">
              01/07
            </div>
            <div class="blog__category">
              <a href="#">Technlogy</a>
            </div>  
          </div>
          
          <div class="blog__title">
            Donec a congue leo. Potenti et eros sed justo commodo bibendum non at nunc. 
          </div>
          <div class="blog__main">
            <p>
              Aliquam tincidunt velit sit amet ante hendrerit tempus. Donec et nisi dictum felis sollicitudin congue. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh (iaculis pretium sem orci aliquet mauris). Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus.
            </p>
          </div>
          <div class="blog__more">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    
  }
</script>