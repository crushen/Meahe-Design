<template>
  <footer v-if="show">
    <p>&copy;Meahė Design, all rights reserved.</p>
    <p>Website by <a href="https://charlotterushen.com/" target="_blank">Charlotte Rushen.</a></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    console.log('mounted');
    setTimeout( () => this.show = true, 1000);
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  padding: 30px 0;
}

p {
  font-style: italic;
  font-size: 14px;
}

/* Desktop */
@media screen and (min-width: 920px) {
  footer {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: center;
    margin-top: 200px;
    padding: 60px 0;
  }

  p:first-child {
    margin-right: 60px;
  }
}
</style>