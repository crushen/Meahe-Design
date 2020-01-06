<template>
  <div class="home">
    <div class="circle"></div>
    <img v-for="(img, index) in name" :key="index" :src="img" alt="" class="name">
    <div class="circle-2"></div>
    <div class="circle-3"></div>
    <img :src="logo" alt="" class="logo">
  </div>
</template>

<script>
import img1 from '../assets/Logo/landing-1.png';
import img2 from '../assets/Logo/landing-2.png';
import img3 from '../assets/Logo/landing-3(1).png';
import logo from '../assets/Logo/landing-4.png';

export default {

  data() {
    return {
      name: [
        img1,
        img2,
        img3
      ],
      logo
    }
  },
  created() {
    setTimeout( () => this.$router.push({ path: '/projects'}), 3200);
  }
}
</script>

<style scoped>

.home {
  width: 100vw;
  height: 100vh;
  background: var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  overflow: hidden;
}

.circle, .circle-2, .circle-3 {
  width: 280px;
  height: 280px;
  border-radius: 6000px;
  background: white;
}

.name, .circle-2, .logo {
  width: 280px;
  position: absolute;

  animation-name: flash;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  opacity: 0;
}

.name:nth-of-type(1) {
  animation-delay: 0.5s;
}

.name:nth-of-type(2) {
  animation-delay: 0.9s;
}

.name:nth-of-type(3) {
  animation-delay: 1.3s;
}

.circle-2 {
  animation-delay: 2.2s;
}

.logo {
  width: 250px;
  animation-delay: 2.2s;
}

.circle-3 {
  animation-name: grow;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 2.2s;

  position: absolute;
  opacity: 0;
}

@keyframes flash {
  50% {
  opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes grow {
  50% {
    opacity: 1;
    width: 280px;
    height: 280px;
  }
  100% {
    opacity: 1;
    width: 5000px;
    height: 5000px;
  }
}

</style>
