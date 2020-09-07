<template>
  <section v-if="subpage" class="page">
    <p>{{ subpage.title }}</p>
  </section>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    subpage: {
      query: gql`
        query GetPage($slug: String) {
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
