<template>
  <div class="info">

    <img v-show="!open" :src="iButton" alt="" @click="toggleInfo" id="info">
    <img v-show="open" :src="xButton" alt="" @click="toggleInfo" class="close">

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="open" class="modal">
        <div class="modal-content" v-for="proj in projects" :key="proj.id">
          <h1>{{ proj.title }}</h1>
          <p>{{ proj.content.text }}</p>
          <p>{{ proj.dateAndLocation }}</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import iButton from '../../assets/Buttons/info.svg';
import xButton from '../../assets/Buttons/close.svg';

export default {
  name: 'InfoButton',
  props: ['projects'],
  data() {
    return {
      open: false,
      iButton,
      xButton
    }
  },
  methods: {
    toggleInfo() {
      this.open = !this.open;
      const logo = document.querySelector('.logo'),
            burger = document.querySelector('.burger'),
            body = document.querySelector('body')
      if(this.open) {
        logo.style.zIndex = '0';
        burger.style.zIndex = '0';
        body.style.overflow = 'hidden';
      } else {
        logo.style.zIndex = '40';
        burger.style.zIndex = '40';
        body.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style scoped>

img {
  width: 32px;
  height: 32px;
  position: fixed;
  cursor: pointer;
}

#info {
  z-index: 20;
}

.modal-content {
  width: 90%;
  margin: auto;
  padding-top: 160px;
}

p {
  margin-top: 32px;
  white-space: pre-line;
}

p:last-of-type {
  text-align: right;
  margin-bottom: 64px;
}

@media screen and (min-width: 700px) {

  .modal-content {
    width: 70%;
    max-width: 750px;
    padding-top: 200px;
  }
}
</style>