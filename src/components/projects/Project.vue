<template>
  <section class="nav-padding">
    <div v-for="proj in project" :key="proj.id">
      <info-button />
      <!-- <h1>{{ proj.title.rendered }}</h1> -->
      <img  v-for="img in proj.acf.gallery"
            :key="img.id"
            :src="img.sizes.large" 
            :alt="img.alt"
            data-aos="fade"
      >
    </div>
  </section>
</template>

<script>
import InfoButton from '../info/InfoButton.vue';

export default {
  data() {
    return {
      project: []
    }
  },
  components: {
    InfoButton
  },
  mounted() {
    this.$http.get(`projects/${this.$route.params.id}`).then(res => {
        this.project.push(res.data);
    }, error => {
      alert(error);
    });
  }
}
</script>

<style scoped>

section {
  width: 90%;
  margin: auto;
}

img {
  width: 100%;
  margin-bottom: 5vw;
}

</style>