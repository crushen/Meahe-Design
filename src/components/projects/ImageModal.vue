<template>
  <div class="info">

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="imgExpanded" class="modal">

        <button @click="closeModal">&times;</button>
      
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
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

img {
  width: 94%;
  padding: 32px 0 82px 0;
}

button {
  align-self: flex-end;
  margin: 50px 3% 0 0;

  width: 32px;
  height: 32px;
  background: var(--black);
  opacity: 0.5;
  color: white;
  border-radius: 50px;
  border: none;
  outline: none;
  font-family: 'BrownStd', Helvetica, Arial,  sans-serif;
  font-size: 22px;
  font-weight: bold;
}

@media screen and (min-width: 920px) {

  img {
    width: 70%;
  }

  button {
    margin: 50px 15% 0 0;
  }
}
</style>