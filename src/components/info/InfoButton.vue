<template>
  <div class="info">

    <button @click="toggleInfo" id="info">i</button>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="open" class="modal">
        <div class="modal-content" v-for="proj in project" :key="proj.id">
          <h1>{{ proj.title.rendered }}</h1>
          <p v-html="proj.acf.content"></p>
          <p v-html="proj.acf.date_location"></p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'InfoButton',
  props: ['project'],
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleInfo() {
      this.open = !this.open;
      const button = document.querySelector('#info'),
            logo = document.querySelector('.logo'),
            burger = document.querySelector('.burger'),
            body = document.querySelector('body');
      if(this.open) {
        logo.style.zIndex = '0';
        burger.style.zIndex = '0';
        button.innerHTML = '&times';
        button.style.paddingBottom = '2px';
        button.style.opacity = '0.5';
        body.style.overflow = 'hidden';
      } else {
        logo.style.zIndex = '40';
        burger.style.zIndex = '40';
        button.innerHTML = 'i';
        button.style.paddingBottom = '0';
        button.style.opacity = '1';
        body.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style scoped>

button {
  width: 32px;
  height: 32px;
  background: var(--black);
  color: white;
  border-radius: 50px;
  border: none;
  outline: none;
  margin-bottom: 5vw;
  font-family: 'BrownStd', Helvetica, Arial,  sans-serif;
  font-size: 22px;
  font-weight: bold;
  position: relative;
  z-index: 20;
  padding: 0;
  text-align: center;
  vertical-align: middle;
}


.modal {
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal-content {
  width: 90%;
  margin: auto;
  padding-top: 160px;
}

h1 {
  color: var(--black);
}

p {
  margin-top: 32px;
}

p:last-of-type {
  text-align: right;
  margin-bottom: 64px;
}

@media screen and (min-width: 700px) {
  
  button {
    margin: 2vw 0 5vw 0;
  }

  .modal-content {
    width: 70%;
    margin: auto;
    padding-top: 160px;
  }
}
</style>