<template>
  <section v-if="subpage" class="page">
    <project-gallery :projects="subpage.projects" @toggle="toggleImg" />
    <image-modal :selectedProject="selectedProject" :imgExpanded="imgExpanded" @imgClosed="toggleImg()" />
  </section>
</template>

<script>
import gql from 'graphql-tag';
import projectGallery from '@/components/projects/ProjectGallery';
import imageModal from '@/components/projects/ImageModal.vue';

export default {
  components: {
    projectGallery,
    imageModal
  },
  data() {
    return {
      selectedProject: null,
      imgExpanded: false
    }
  },
  methods: {
    toggleImg(project) {
      this.selectedProject = project;
      this.imgExpanded = !this.imgExpanded;
      const logo = document.querySelector('.logo'),
            burger = document.querySelector('.burger'),
            body = document.querySelector('body');
      if(this.imgExpanded) {
        logo.style.zIndex = '0';
        burger.style.zIndex = '0';
        body.style.overflow = 'hidden';
      } else {
        logo.style.zIndex = '40';
        burger.style.zIndex = '40';
        body.style.overflow = 'auto';
      }
    }
  },
  apollo: {
    subpage: {
      query: gql`
        query GetSubpage($slug: String) {
          subpage(where: {slug: $slug}) {
            title
            projects {
              title
              subTitle
              dateAndLocation
              images {
                url
              }
              content {
                html
              }
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.subslug
        }
      }
    }
  }
}
</script>

<style scoped>
.page {
  width: 90%;
  margin: auto;
}
</style>
