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
      const button = document.querySelector('#info');
      if(this.open) {
        document.querySelector('body').style.overflow = 'hidden';
        button.innerHTML = '&times';
        button.style.paddingBottom = '2px';
        button.style.opacity = '0.5';
        
      } else {
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('#info').innerHTML = 'i';
        button.style.paddingBottom = '0';
        button.style.opacity = '1';
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
  margin-bottom: 16px;
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
</style>