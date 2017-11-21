<template>
  <section class="contact">
    <div class="contact__wrapper">
      <div class="container">
        <div class="contact__row row align-middle">
          <div class="column large-6">
            <h2 class="contact__header">
              {{contact.headline}}
            </h2>
          </div>
          <div class="column large-6 contact-info">
            <h3>
              {{contact.subHeadline}}
            </h3>
            <div class="contact-info__main">
              
              <h4 v-for="item in contact.mainContact">
                <a :href="item.url">{{ item.label }}</a>
              </h4>
            </div>
            <address class="contact-info__address" v-html="contact.address">
            </address>
            <p class="contact-info__billing" v-html="contact.lastLine">
            </p>
          </div>
        </div>
      </div>

    </div>
    <reef-bottom></reef-bottom>
  </section>
</template>
<script>

  import ReefBottom from '../components/ReefBottom.vue'
  export default {
    components: {
      ReefBottom
    },
    computed: {
      contact() {
        return this.$store.state.contact
      }
    }
  }
</script>