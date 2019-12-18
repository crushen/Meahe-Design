<template>
  <div class="container">

    <router-link  v-for="proj in projects" 
                  :key="proj.id" 
                  :to="{ name: 'project', params: { slug: proj.slug }}"
    >
                  {{ proj.title }}
    </router-link>

  </div>
</template>

<script>
import gql from 'graphql-tag';

const projects = gql`
  query {
    projects {
      title
      id
      slug
    }
  }
`

export default {
    apollo: {
    projects: {
      query: projects
    }
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