<template>
  <div class="info">

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="modal">

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
      this.$emit('imgClosed', this.imgExpanded);
    }
  }
}
</script>

<style scoped>

.modal {
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