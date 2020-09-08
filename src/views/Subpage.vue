<template>
  <section v-if="subpage" class="page">
    <project-gallery :projects="subpage.projects" />
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
    subpage: {
      query: gql`
        query GetSubpage($slug: String) {
          subpage(where: {slug: $slug}) {
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
