<template>
  <section>
    <div v-for="proj in project" :key="proj.id">
      <h1>{{ proj.title.rendered }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      project: []
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

</style>