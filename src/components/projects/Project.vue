<template>
  <section id="project" class="nav-padding">
    <div v-for="proj in project" :key="proj.id">

      <info-button :project="project" />

      <div class="gallery">
        <div class="wrapper" v-for="img in proj.acf.gallery" :key="img.id" >
          <img  :src="img.sizes.large" 
                :alt="img.alt" 
                data-aos="fade" 
                data-aos-offset="200"
                @click="expandImg(img.sizes.large)"
          >
        </div>
      </div>

    </div>

    <image-modal :selectedImg="selectedImg" :imgExpanded="imgExpanded" @imgClosed="expandImg()" />

  </section>
</template>

<script>
import InfoButton from '../info/InfoButton.vue';
import ImageModal from '../projects/ImageModal.vue';

export default {
  data() {
    return {
      project: [],
      selectedImg: '',
      imgExpanded: false
    }
  },
  components: {
    InfoButton,
    ImageModal
  },
  methods: {
    expandImg(url) {
      this.selectedImg= url;
      this.imgExpanded = !this.imgExpanded;
      const button = document.querySelector('#info'),
            logo = document.querySelector('.logo'),
            burger = document.querySelector('.burger'),
            body = document.querySelector('body');
      if(this.imgExpanded) {
        logo.style.zIndex = '0';
        burger.style.zIndex = '0';
        button.style.zIndex = '0';
        body.style.overflow = 'hidden';
      } else {
        logo.style.zIndex = '40';
        burger.style.zIndex = '40';
        button.style.zIndex = '20';
        body.style.overflow = 'auto';
      }
    }
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

img:first-of-type {
  margin-top: 50px;
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

  .wrapper {
    width: 90%;
  }

  /* Organic grid flow */
  .wrapper:nth-child(odd) {
    justify-self: start;
    transform: translateY(200px);
  }

  .wrapper:nth-child(1) {
    width: 70%;
  }

  .wrapper:nth-child(4n) {
    width: 80%;
  }

  .wrapper:nth-child(3n) {
    width: 90%;
  }

  .wrapper:nth-child(5n) {
    width: 70%;
    justify-self: end;
  }

  .wrapper:nth-child(6n) {
    justify-self: end;
  }

  .wrapper:nth-child(7n) {
    width: 70%;
    justify-self: start;
  }

  .wrapper:nth-child(8n) {
    width: 90%;
    justify-self: start;
  }
}

</style>