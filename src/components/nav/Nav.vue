<template>

  <div>
    <div class="nav-bar"></div>
    <img :src="logo" alt="An orange circle with the Méahé Design logo inside" class="logo">

    <div class="burger" @click="toggleNav">
      <div class="burger-bar"></div>
    </div>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <nav class="nav" v-if="navActive">
        <div class="links animated fadeIn faster">
          <router-link to="/projects">Projects</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <project-list class="links animated fadeIn faster"/>
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
      navActive: false
    }
  },
  components: {
    projectList
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
      if(this.navActive) {
        document.querySelector('.burger').classList.add('active');
      } else {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.burger-bar').style.transition = '0.3s';
      }
    }
  },
  watch: {
    '$route'() {
      this.navActive = false;
      document.querySelector('.burger').classList.remove('active');
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
  z-index: 30;
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
  z-index: 30;
}

.burger-bar {
  width: 100%;
  height: 6px;
  background: black;
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
  background: black;
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
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: black;
  z-index: 20;
  padding: 15px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 28px;
}

.nav a:not(:first-of-type) {
  margin-top: 16px;
}

.nav a.router-link-exact-active {
  color: white;
  text-decoration: underline;
}

.links {
  animation-delay: 0.7s;
}

.links:first-of-type {
  width: 70%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

.links:nth-of-type(2) {
  margin-top: 80px;
}

/* Tablet */
@media screen and (min-width: 700px) {
  .logo {
    top: 30px;
    left: 30px;
    width: 65px;
  }

  .burger {
    top: 37px;
    right: 32px;
    width: 40px;
    height: 40px;
  }

  .nav {
    padding: 30px;
  }

  .nav a {
    font-size: 30px;
  }

  .nav a:not(:first-of-type) {
    margin-top: 22px;
  }
}
</style>
