<template>
  <div class="container">
    <div
      v-for="page in pages" 
      :key="page.id"
      class="page-item">
      <router-link
        :to="{ name: 'page', params: { slug: page.slug } }"
        class="page-link">
        {{ page.title }}
      </router-link>

      <div
        v-if="page.subpage.length"
        class="subpages">
        <router-link
          v-for="subpage in page.subpage"
          :key="subpage.id"
          :to="{ name: 'subpage', params: { slug: page.slug, subslug: subpage.slug } }"
          class="subpage-link">
          - {{ subpage.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    pages: {
      query: gql`
        query {
          pages {
            id
            title
            slug
            subpage {
              id
              title
              slug
            }
          }
        }
      `
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.page-link,
.subpage-link {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

.page-item:not(:first-of-type) {
  margin-top: 16px;
}

.subpages {
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;
}

  a:hover {
    color: var(--light-orange);
  }

/* Tablet */
@media screen and (min-width: 700px) {
  .container a {
    font-size: 30px;
  }

  .page-item:not(:first-of-type) {
    margin-top: 22px;
  }

  .subpages a {
    margin-top: 8px;
  }
}
</style>