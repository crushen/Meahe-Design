<template>
  <div class="container">

    <router-link  v-for="proj in projects" 
                  :key="proj.id" 
                  :to="{ name: 'project', params: { slug: proj.slug, id: proj.id }}">
                  {{ proj.title.rendered }}
    </router-link>

  </div>
</template>

<script>
// Links work fine going from home page, but new component not loading from nav

export default {
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.$http.get('projects').then(res => {
      for(let project in res.data) {
        this.projects.push(res.data[project]);
      }
    }, error => {
      alert(error);
    });
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container a:not(:first-of-type) {
  margin-top: 16px;
}

.container a {
  color: white;
  text-decoration: none;
  font-size: 22px;
}

.container a.router-link-active {
  color: white;
  text-decoration: underline;
}

/* Tablet */
@media screen and (min-width: 700px) {
  .container a {
    font-size: 30px;
  }

  .container a:not(:first-of-type) {
    margin-top: 22px;
  }
}
</style>