<template>
  <section class="blog">
    <reef></reef>
    <div class="blog__wrapper">
      
      <div class="container">
        <div class="row blog__row">
          <div class="column large-12 blog__header">
            <h2>
              Recent News
            </h2>
            <a href="#">Visit our blog for more</a>
          </div>
          <div class="column large-12 blog__post" v-for="i in 3">
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

    </div>

    <reef></reef>
  </section>
</template>
<script>
  import Reef from '../components/Reef.vue'
  export default {
    components: {
      Reef
    }
    
  }
</script>