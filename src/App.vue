<template>
  <div id="app">
    <app-nav/>
    <router-view/>
  </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
