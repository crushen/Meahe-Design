<template>
  <nav>


    <div id="nav">
      <router-link to="/">Projects</router-link>
      <router-link to="/about">About</router-link>
    </div>


    <!-- <div>
      <div class="nav-bar"></div>
      <img :src="logo" alt="An orange circle with the Méahé Design logo inside" class="logo">

      <div class="burger" @click="toggleNav">
        <div class="burger-bar"></div>
      </div>

      <transition name="slide" enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
        <nav class="nav" v-if="navActive">
          <router-link to="/" exact>Home</router-link>
          <router-link to="/brands">Brands</router-link>
          <router-link to="/side-projects">Side Projects</router-link>
        </nav>
      </transition>

    </div> -->


  </nav>
</template>

<script>


</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  color: var(--grey)
}

#nav a.router-link-exact-active {
  color: var(--orange);
}
</style>
