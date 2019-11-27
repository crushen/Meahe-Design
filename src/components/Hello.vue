<template>
  <div class="hello">
    <div v-for="proj in projects" :key="proj.id" data-aos="fade">
    <h1>{{ proj.title.rendered }}</h1>
    <p>{{ proj.acf.sub_title }}</p>
    <img :src="proj.acf.featured_image_one.sizes.large" :alt="proj.acf.featured_image_one.alt">
    <p>{{ proj.acf.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    }
  },
  created() {
    this.$http.get('wp/v2/projects').then(res => {
      for(let project in res.data) {
        this.projects.push(res.data[project])
      }
    }, error => {
      alert(error);
    });
  }
}
</script>

<style scoped>
img {
  width: 100px;
}
</style>