<template>
  <div @click="buttonClicked">{{ mathAction }}</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Math-button",
  props: ['mathAction'],
  methods: {
    ...mapActions(['pressMathAction']),
    buttonClicked() {
      this.pressMathAction(this.mathAction)
    }
  },
}
</script>

<style scoped>

</style>