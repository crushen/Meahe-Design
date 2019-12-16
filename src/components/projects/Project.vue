<template>
  <section id="project" class="nav-padding">
    <div v-for="proj in project" :key="proj.id">
      <info-button :project="project" />
      <div class="gallery">
        <img  v-for="img in proj.acf.gallery"
              :key="img.id"
              :src="img.sizes.large" 
              :alt="img.alt"
        >
      </div>
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

/* Desktop */
@media screen and (min-width: 920px) {
  .gallery {
    width: 80%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    align-items: center;
    grid-column-gap: 60px;
    grid-row-gap: 60px;
    margin: auto;
  }

  img {
    width: 90%;
  }

  /* Organic grid flow */
  img:nth-child(odd) {
    justify-self: start;
    transform: translateY(200px);
  }

  img:nth-child(1) {
    width: 70%;
  }

  img:nth-child(4n) {
    width: 80%;
  }

  img:nth-child(3n) {
    width: 90%;
  }

  img:nth-child(5n) {
    width: 70%;
    justify-self: end;
  }

  img:nth-child(6n) {
    justify-self: end;
  }

  img:nth-child(7n) {
    width: 70%;
    justify-self: start;
  }

  img:nth-child(8n) {
    width: 90%;
    justify-self: start;
  }
}

</style>