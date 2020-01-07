<template>
  <section id="project-list" class="nav-padding">
    <div v-for="proj in projects" :key="proj.id" class="wrapper">
      <router-link tag="div" :to="{ name: 'project', params: { slug: proj.slug }}" class="container" data-aos="fade" data-aos-offset="200">
        <img :src="proj.featuredImageOne.url" alt="">
        <div class="overlay">
          <div class="text">
            <p>{{ proj.title }}</p>
            <p>{{ proj.subTitle }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <div v-for="proj in projects" :key="`${proj.id}two`" class="wrapper">
      <router-link tag="div" :to="{ name: 'project', params: { slug: proj.slug }}" class="container" data-aos="fade" data-aos-offset="200">
        <img :src="proj.featuredImageTwo.url" alt="">
        <div class="overlay">
          <div class="text">
            <p>{{ proj.title }}</p>
            <p>{{ proj.subTitle }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <div v-for="proj in unpublishedProjects" :key="proj.id" class="wrapper">
      <div class="container" data-aos="fade"  data-aos-offset="200">
        <img :src="proj.featuredImage.url" alt="" class="blur">
        <div class="overlay">
          <div class="text">
            <p>Coming Soon</p>
            <p>{{ proj.subTitle }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import gql from 'graphql-tag';

const projects = gql`
  query {
    projects {
      title
      subTitle
      id
      slug
      featuredImageOne {
        url
      }
      featuredImageTwo {
        url
      }
    }
  }
`

const unpublishedProjects = gql`
  query {
    unpublishedProjects {
      featuredImage {
        url
      }
      subTitle
      id
    }
  }
`

export default {
  apollo: {
    projects: {
      query: projects
    },
    unpublishedProjects: {
      query: unpublishedProjects
    }
  }
}
</script>

<style scoped>
#project-list {
  margin: auto;
}

.container {
  position: relative;
  width: 100%;
  margin: 0 auto 5vw auto;
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

p {
  font-size: 18px;
}

.text {
  color: var(--grey);
  position: absolute;
  top: 55%;
  left: 50%;
  width: 80%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  transition: 0.4s;
}

.text p:first-child {
  font-weight: bold;
  margin-bottom: 16px;
}

.container:hover .overlay {
  opacity: 0.8;
}

.container:hover .text {
  top: 50%;
}

.blur {
  -webkit-filter: blur(8px);
  filter: blur(8px);
}

/* Desktop */
@media screen and (min-width: 920px) {
  #project-list {
    width: 80%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    align-items: center;
    grid-column-gap: 60px;
    grid-row-gap: 60px;
  }

  .container {
    width: 90%;
  }

  /* Organic grid flow */
  .wrapper:nth-child(odd) {
    justify-self: start;
  }

  .wrapper:nth-child(even) {
    transform: translateY(200px);
  }

  .wrapper:nth-child(2) {
    width: 70%;
  }

  .wrapper:nth-child(3n) {
    width: 90%;
  }

  .wrapper:nth-child(4n) {
    width: 80%;
    justify-self: end;
  }

  .wrapper:nth-child(5n) {
    width: 90%;
    justify-self: end;
  }

  .wrapper:nth-child(7n) {
    width: 70%;
    justify-self: start;
  }

  .wrapper:nth-child(8n) {
    width: 90%;
    justify-self: start;
  }
}

</style>