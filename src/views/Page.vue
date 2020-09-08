<template>
  <section v-if="page" class="page">
    <project-gallery :projects="page.projects" @toggle="toggleImg" />
    <image-modal :selectedProject="selectedProject" :imgExpanded="imgExpanded" @imgClosed="toggleImg()" />
    <app-footer />
  </section>
</template>

<script>
import gql from 'graphql-tag';
import projectGallery from '@/components/projects/ProjectGallery';
import imageModal from '@/components/projects/ImageModal';
import appFooter from '@/components/Footer';

export default {
  components: {
    projectGallery,
    imageModal,
    appFooter
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
    page: {
      query: gql`
        query GetPage($slug: String) {
          page(where: {slug: $slug}) {
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
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>
