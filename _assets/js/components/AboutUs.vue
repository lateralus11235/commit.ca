<template>
  <section class="about-us">
    <div class="city">
      <div class="city__inner rellax"  data-rellax-speed="1.45" data-rellax-percentage="0.5"></div>
    </div>
    <div class="city-background">
      <div class="city-background__inner rellax" data-rellax-speed="-1.1" data-rellax-percentage="0.5"></div>
    </div>
    
    <div class="about-us__helper about-us__helper--top">
      <div class="about-us__helper-lower about-us__helper--top-lower"></div>
      <div class="about-us__helper-higher about-us__helper--top-higher"></div>
      <div class="about-us__helper-lowest about-us__helper--top-lowest rellax"  data-rellax-speed="-2" data-rellax-percentage="0.5"></div>
    </div>
    <div class="about-us__wrapper">
      <div class="container">
        <div class="row">
          <div class="column large-6 about-us__header">
            <h2 v-if="about.headline" v-text="about.headline">
              Communicating IT
            </h2>
            <p v-for="paragraph in about.main" v-text="paragraph"></p>
            <p class="about-us__join" v-html="paragraph" v-for="paragraph in about.join"></p>
          </div>
        </div>
        <div class="row about-us__row">
          <div class="column large-6 partner__header">
            <h2 v-text="about.partnersHeadline">
            </h2>
          </div>
          <div class="column large-6">

            <div class="partner" v-for="partner in partners">
              <div class="partner__logo" :class="['partner__logo--'+partner.id]">
                <div class="partner__logo-inner">
                  {{ partner.name }}
                </div>
              </div>
              <div class="partner__main">
                <p v-for="paragraph in partner.desc" v-text="paragraph"></p>
              </div>
              <div class="partner__link">
                <a :href="partner.url" target="_blank">
                  Visit site
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="about-us__helper about-us__helper--bottom">
      <div class="about-us__helper-lower about-us__helper--bottom-lower"></div>
      <div class="about-us__helper-higher about-us__helper--bottom-higher"></div>
      <div class="about-us__helper-lowest about-us__helper--bottom-lowest rellax"  data-rellax-speed="2" data-rellax-percentage="0.5"></div>
    </div>
  </section>
</template>
<script>
  export default {
    computed: {
      about() {
        return this.$store.state.about
      },
      partners() {
        return this.about.partners
      }
    }
    
  }
</script>