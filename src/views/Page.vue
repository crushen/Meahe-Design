<template>
  <section v-if="page" class="page">
    <project-gallery :projects="page.projects" />
  </section>
</template>

<script>
import gql from 'graphql-tag';
import projectGallery from '@/components/projects/ProjectGallery'

export default {
  components: {
    projectGallery
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
              images {
                url
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

<style scoped>
.page {
  width: 90%;
  margin: auto;
}
</style>
