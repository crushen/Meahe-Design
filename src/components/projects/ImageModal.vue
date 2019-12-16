<template>
  <div class="info">

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="image-modal">

        <button @click="closeModal">Close</button>
      
        <img :src="selectedImg" alt="">
          
      </div>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'ImageModal',
  props: ['selectedImg', 'imgExpanded'],
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      //this.imgExpanded = false;
      this.$emit('imgClosed', this.imgExpanded);
    }
  }
}
</script>

<style scoped>

.image-modal {
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

  display: flex;
  align-items: flex-start;
  justify-content: center;
}

img {
  width: 70%;
  padding-top: 125px;
}

button {
  position: absolute;
}

@media screen and (min-width: 700px) {

}
</style>