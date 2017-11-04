<template>
  <section class="what-we-offer">
    <div class="container">
      <div class="row">
        <div class="column.large-6">
          <h2>
            What We Offer
          </h2>
        </div>
        <div class="column large-6">
          Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Potenti et eros sed justo commodo bibendum non at nunc. Suspendisse potenti cras molestie, risus a enim convallis vitae luctus libero lacinia.
        </div>
      </div>
      <div class="row" v-for="i in 2">
        <div class="column large-6 what-we-offer__icon">
        </div>
        <div class="column large-6 what-we-offer__desc">
          <h3 class="what-we-offer__header">
            First offered
          </h3>
          <div class="what-we-offer__text">
            <p>
              Suspendisse potenti cras molestie, risus a enim convallis vitae luctus libero lacinia.  
            </p>
            
          </div>
        </div>
        <div class="column large-6 what-we-offer__icon">
        </div>
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    
  }
</script>