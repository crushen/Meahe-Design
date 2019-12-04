<template>
  <section id="project-list">
    <div v-for="proj in projects" :key="proj.id" data-aos="fade">
      <router-link tag="div" :to="{ name: 'project', params: { slug: proj.slug, id: proj.id }}" class="container">
        <img :src="proj.acf.featured_image_one.sizes.large" :alt="proj.acf.featured_image_one.alt">
        <div class="overlay">
          <div class="text">
            <p>{{ proj.title.rendered }}</p>
            <p>{{ proj.acf.sub_title }}</p>
          </div>
        </div>
      </router-link>
      <!-- <p v-html="proj.acf.content"></p>
      <p v-html="proj.acf.date_location"></p> Testing - this will be on project's page -->
      <!-- <router-link :to="{ name: 'project', params: { id: proj.id }}">
        Read More
      </router-link> -->
    </div>

  </section>
</template>

<script>
import project from '../projects/Project.vue'; 

export default {
  data() {
    return {
      project,
      projects: [],
      unpublished: []
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

    this.$http.get('unpublished_projects').then(res => {
      for(let project in res.data) {
        this.unpublished.push(res.data[project]);
      }
    }, error => {
      alert(error);
    });
  }
}
</script>

<style scoped>
#project-list {
  padding: 200px 0 0 0;
}

.container {
  position: relative;
  width: 300px;
  cursor: pointer;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  transition: 0.4s;
  background: #FFF;
}

.text {
  color: var(--grey);
  position: absolute;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  transition: 0.4s;
}

.container:hover .overlay {
  opacity: 0.7;
}

.container:hover .text {
  top: 50%;
}
</style>