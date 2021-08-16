<template>
<div class="{{className}}" @click="buttonClicked">{{number}}</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Number-button",
  props: ['number', 'className'],
  methods: {
    ...mapActions(['pushNumber']),
    buttonClicked() {
      this.pushNumber(this.number)
    }
  }
}

</script>

<style scoped>

</style>