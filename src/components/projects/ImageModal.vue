<template>
  <div class="info">

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="modal">

        <img :src="xButton" alt="" @click="closeModal" class="close">
      
        <img :src="selectedImg" alt="" class="modal-img">
          
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

.modal {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.modal-img{
  width: 94%;
  padding: 32px 0 82px 0;
}

.close {
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin: 50px 3% 0 0;
}

@media screen and (min-width: 920px) {

  .modal-img {
    width: 70%;
  }

  .close {
    margin: 50px 15% 0 0;
  }
}
</style>