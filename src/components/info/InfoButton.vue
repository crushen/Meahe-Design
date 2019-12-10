<template>
  <div class="info">

    <button @click="toggleInfo">i</button>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="open" class="modal">
        <div class="modal-content">
          
        </div>
      </div>
    </transition>

  </div>
</template>

<script>


export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleInfo() {
      this.open = !this.open;
      if(this.open) {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = 'auto';
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

</style>