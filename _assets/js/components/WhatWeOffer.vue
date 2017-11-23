<template>
  <section class="what-we-offer">
    <reef></reef>

    <div class="container" id="what-we-offer" >
      <div class="row">
        <div class="column medium-6 medium-offset-3 what-we-offer__headline" data-aos="fade-up" data-aos-duration="1500">
          <h3 v-text="$store.state.whatWeOffer.headline" v-if="$store.state.whatWeOffer.headline">
          </h3>
        </div>
      </div>
      <div class="row what-we-offer__item" data-aos="fade-up" data-aos-duration="1500" v-for="item in items">
        <div class="column large-6 ">
          
          <div class="what-we-offer__icon" :class="['what-we-offer__icon--' + item.title.replace(/\s+/g, '').toLowerCase() ]">
            <div class="what-we-offer__icon-inner"></div>
          </div>
        </div>
        <div class="column large-6 end what-we-offer__desc">
          <h3 class="what-we-offer__header">
            {{item.title}}
          </h3>
          <div class="what-we-offer__text">
            <p>
              {{item.body}}
            </p>
            
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
  import Reef from '../components/Reef.vue'
  export default {
    components: {
      Reef
    },
    computed: {
      items() {
        return this.$store.state.whatWeOffer.items
      }
    }
    
  }
</script>