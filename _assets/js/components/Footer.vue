<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="column">
          Copyright © {{ currentYear }} Communicating IT Inc. All Rights Reserved.
        </div>
      </div>
    </div>
    
  </footer>

</template>
<script>
  export default {
    computed: {
      currentYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>
