<template>
  <main role="region" id="app">
    <h1 class="h1">Meahe Design</h1>
    <app-nav/>
    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </main>
</template>

<script>
import appNav from './components/nav/Nav.vue';

export default {
  components: {
    appNav
  }
}
</script>

<style>
/* Fonts */
@font-face {
    font-family: 'BrownStd';
    src: url('../src/assets/Font/BrownStd-Regular.woff2') format('woff2'),
        url('../src/assets/Font/BrownStd-Regular.woff') format('woff'),
        url('../src/assets/Font/BrownStd-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'BrownStd Light Reclining';
    src: url('../src/assets/Font/BrownStd-ReclinLight.woff2') format('woff2'),
        url('../src/assets/Font/BrownStd-ReclinLight.woff') format('woff'),
        url('../src/assets/Font/BrownStd-ReclinLight.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}
@font-face {
    font-family: 'BrownStd';
    src: url('../src/assets/Font/BrownStd-Bold.woff2') format('woff2'),
        url('../src/assets/Font/BrownStd-Bold.woff') format('woff'),
        url('../src/assets/Font/BrownStd-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'BrownStd';
    src: url('../src/assets/Font/BrownStd-LightItalic.woff2') format('woff2'),
        url('../src/assets/Font/BrownStd-LightItalic.woff') format('woff'),
        url('../src/assets/Font/BrownStd-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}
@font-face {
    font-family: 'BrownStd';
    src:url('../src/assets/Font/BrownStd-Light.woff2') format('woff2'),
        url('../src/assets/Font/BrownStd-Light.woff') format('woff'),
        url('../src/assets/Font/BrownStd-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

/* Colours */
:root {
  --orange: #E7491F;
  --light-orange: #FAD3B7;
  --grey: #636362;
  --light-grey: #dbd9d5;
  --blue: #8AA1AC;
  --black: #1A1A1A;
}

/* Global styles */
* {
  padding: 0;
  margin: 0;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

#app {
  font-family: 'Apertura', Helvetica, Arial,  sans-serif;
  color: var(--grey);
}

button {
  cursor: pointer;
}

/* Global styles mobile */
p {
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
}

h1 {
  font-size: 26px;
}

.h1 {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
}

a {
  text-decoration: none;
  color: var(--grey);
  transition: 0.1s;
}

a:hover {
  color: var(--light-orange);
}

.page {
  width: 90%;
  min-height: 100vh;
  margin: auto;
}

.nav-padding {
  padding: 87px 0 0 0;
}

.modal{
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.close {
  z-index: 40;
  cursor: pointer;
}

/* Global styles for tablet */
@media screen and (min-width: 700px) {
  p {
    font-size: 24px;
    line-height: 30px;
  }

  h1 {
    font-size: 32px;
  }
}

/* Global styles desktop */
@media screen and (min-width: 920px) {

  .nav-padding {
    padding: 117px 0 0 0;
  }
  
}
</style>
