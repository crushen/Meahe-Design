<template>
  <div class="modal-page">
    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="modal">
        <div class="inner-modal">
          <img :src="xButton" alt="" @click="closeModal" class="close">
          <img :src="selectedProject.url" alt="" class="modal-img">

          <div>
            <h1>{{ selectedProject.title }}</h1>
            <p v-html="selectedProject.content.html" class="text" />
            <p>{{ selectedProject.dateAndLocation }}</p>
          </div>  
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import xButton from '../../assets/Buttons/close.svg';

export default {
  name: 'ImageModal',
  props: ['selectedProject', 'imgExpanded'],
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
  width: 90%;
  margin: auto;
  position: relative;
}

.modal-img {
  width: 100%;
  padding: 100px 0 60px 0;
}

.close {
  width: 32px;
  height: 32px;
  top: 50px;
  right: 0;
  position: absolute;
}

p, .text /deep/ p {
  margin-top: 32px;
  white-space: pre-line;
}

p:last-of-type {
  text-align: right;
  margin-bottom: 68px;
}

@media screen and (min-width: 920px) {
  .inner-modal {
    width: 70%;
    max-width: 750px;
  }

  .modal-img {
    padding: 132px 0 60px 0;
  }

  .close {
    width: 32px;
    height: 32px;
    top: 75px;
    right: 0;
    position: absolute;
  }

  p:last-of-type {
    margin-bottom: 100px;
  }
}
</style>
