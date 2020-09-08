<template>
  <section class="modal-page">
    <transition
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="modal">
        <div class="inner-modal">
          <button
            @click="closeModal"
            aria-label="Close project information"
            class="close">
            <img src="@/assets/Buttons/close.svg" alt="">
          </button>

          <img
            :src="selectedProject.url"
            :alt="selectedProject.subTitle"
            class="modal-img">

          <div>
            <h1>{{ selectedProject.title }}</h1>
            <p v-html="selectedProject.content.html" class="text" />
            <p>{{ selectedProject.dateAndLocation }}</p>
          </div>  
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    selectedProject: { required: false, type: Object },
    imgExpanded: { required: false, type: Boolean }
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
  background: transparent;
  outline: none;
  padding: none;
  border: none;
}

.close img {
  width: 100%;
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
