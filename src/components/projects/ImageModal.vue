<template>
  <div class="modal-page">

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="modal">
        <div class="inner-modal">
          <img :src="xButton" alt="" @click="closeModal" class="close">
          <img :src="selectedImg" alt="" class="modal-img">    
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import xButton from '../../assets/Buttons/close.svg';

export default {
  name: 'ImageModal',
  props: ['selectedImg', 'imgExpanded'],
  data() {
    return {
      xButton
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

.inner-modal {
  width: 94%;
  margin: auto;
  position: relative;
}

.modal-img{
  width: 100%;
  padding: 100px 0 82px 0;
}

.close {
  width: 32px;
  height: 32px;
  top: 50px;
  right: 0;
  position: absolute;
}

@media screen and (min-width: 920px) {

  .inner-modal {
    width: 70%;
    max-width: 750px;
  }
}
</style>