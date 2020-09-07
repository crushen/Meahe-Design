<template>

  <div>
    <div class="nav-bar"></div>
    <router-link to="/projects">
      <img :src="logo" alt="An orange circle with the Méahé Design logo inside" class="logo">
    </router-link>

    <div class="burger" @click="toggleNav">
      <div class="burger-bar"></div>
    </div>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <nav class="nav" v-if="navActive" >
        <div class="links animated fadeIn faster">
          <router-link to="/projects" @click.native="aboutOpen = false">Projects</router-link>
          <a @click="aboutOpen = true">About</a>
        </div>
        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
          <project-list v-if="!aboutOpen" class="links animated fadeIn faster"/>

          <div v-else class="about-container">
            <div class="about">
              <p>Meahė Design is a Taiwanese creative design company that is based in London.</p>
              <p>We take pride in our immigrant heritage; our unique role in this society enables us to observe and provide unique design solutions tailored to individual challenges.</p>
              <p>Our projects can accommodate various scales and time, providing a diverse approach to company branding, product design or even a more efficient workflow/structure.</p>
            </div>

          <address>
              Meahė Design<br>
              Unit 4<br>
              37 Bavaria Road<br>
              London N19 4EU
          </address>

          <div class="contact">
            <p>Instagram: <a href="https://www.instagram.com/meahe.design/?hl=en" target="_blank">@meahe.design</a><br>
            General enquiries: <a href="mailto:hello@meahe.design">hello@meahe.design</a></p>
          </div>
          </div>
        </transition>
      </nav>
    </transition>

  </div>

</template>

<script>
import logo from '../../assets/Logo/logo.png';
import projectList from '../nav/ProjectList.vue';

export default {
  data() {
    return {
      logo,
      navActive: false,
      aboutOpen: false
    }
  },
  components: {
    projectList
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
      this.aboutOpen = false;
      const burger = document.querySelector('.burger'),
            body = document.querySelector('body');
      if(this.navActive) {
        burger.classList.add('active');
        body.style.overflow = 'hidden';
      } else {
        burger.classList.remove('active');
        document.querySelector('.burger-bar').style.transition = '0.3s';
        body.style.overflow = 'auto';
      }
    }
  },
  watch: {
    '$route'() {
      this.navActive = false;
      document.querySelector('.burger').classList.remove('active');
      document.querySelector('body').style.overflow = 'auto';
    }
  }
}
</script>

<style scoped>

.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 87px;
  z-index: 10;
  transition: 0.2s;
}

.logo {
  position: fixed;
  top: 15px;
  left: 5vw;
  width: 55px;
  z-index: 40;
}

.burger {
  position: fixed;
  top: 22px;
  right: 5vw;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: rgba(0,0,0,0);
  transition: 0.4s;
  z-index: 40;
}

.burger-bar {
  width: 100%;
  height: 6px;
  background: var(--grey);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition: 0.3s;
}

.burger-bar:before,
.burger-bar:after {
  content: '';
  width: 100%;
  height: 6px;
  background: var(--grey);
  position: absolute;
  transition: 0.3s;
}

.burger-bar::before {
  top: -15px;
}

.burger-bar::after {
  top: 15px;
}

.burger.active .burger-bar {
  background: rgba(0,0,0,0);
}

.burger.active .burger-bar::before {
  top: 0;
  transform: rotate(-45deg);
  background: var(--orange);
  transition: 0.3s;
}

.burger.active .burger-bar::after {
  top: 0;
  transform: rotate(45deg);
  background: var(--orange);
  transition: 0.3s;
}

.nav {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--grey);
  z-index: 30;
  padding: 5vw;
  padding-bottom: 150px;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-shrink: 0;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 28px;
  max-width: 150px;
  cursor: pointer;
}

.nav a:not(:first-of-type) {
  margin-top: 16px;
}

.links {
  animation-delay: 0.7s;
  flex-shrink: 0;
  min-height: auto;
}

.links:first-of-type {
  width: 70%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

.links:nth-of-type(2) {
  margin: 50px 0 100px 0;
}

.about-container {
  flex-shrink: 0;
  min-height: auto;
}

.about, address, .contact {
  width: 90%;
  max-width: 1200px;
  font-size: 18px;
}

.about p, address, .contact p {
  color: white;
  margin-top: 24px;
}

.contact a {
  font-size: 18px;
}

.contact a:hover {
  color: var(--light-orange);
}

/* Tablet */
@media screen and (min-width: 700px) {

  .nav a {
    font-size: 32px;
  }

  .nav a:not(:first-of-type) {
    margin-top: 22px;
  } 

  .about, address, .contact {
    font-size: 24px;
  }

  .contact a {
    font-size: 24px;
  }

  .about p, address, .contact p {
    margin-top: 30px;
  }
}

/* Desktop */
@media screen and (min-width: 920px) {

  .nav-bar {
    height: 117px;
  }

  .logo {
    top: 30px;
  }

  .burger {
    top: 37px;
  }

  a:hover {
    color: var(--light-orange);
  }

}
</style>
