<template>
  <div @click="buttonClicked">
    {{text}}
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Auxiliary-button",
  props: ['text'],
  methods: {
    ...mapActions(['clean']),
    buttonClicked() {
      this.clean(this.text)
    }
  }
}
</script>

<style scoped>

</style>