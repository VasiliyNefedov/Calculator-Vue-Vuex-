<template>
  <div>{{ value }}</div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "Math-button",
  props: ['value'],
  methods: {
    ...mapActions([]),
    ...mapMutations(['setCurrentValue'])
  },
}
</script>

<style scoped>

</style>