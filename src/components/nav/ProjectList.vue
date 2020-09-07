<template>
  <div class="container">
    <div
      v-for="page in pages" 
      :key="page.id"
      class="page">
      <router-link
        :to="{ name: 'project', params: { slug: page.slug } }"
        class="page-link">
        {{ page.title }}
      </router-link>

      <div
        v-if="page.subpage.length"
        class="subpages">
        <router-link
          v-for="subpage in page.subpage"
          :key="subpage.id"
          :to="{ name: 'project', params: { slug: subpage.slug } }"
          class="subpage-link">
          - {{ subpage.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const pages = gql`
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

export default {
    apollo: {
    pages: {
      query: pages
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
  font-size: 22px;
}

.page:not(:first-of-type) {
  margin-top: 8px;
}

.subpages {
  margin: 8px 0 24px 20px;
  display: flex;
  flex-direction: column;
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

/* Desktop */
@media screen and (min-width: 920px) {
  a:hover {
    color: var(--light-orange);
  }
}
</style>