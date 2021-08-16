<template>
  <div>
    <div class="total">заглушка</div>
    <div class="current"><span>{{ getCurrentValue }}</span></div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Screen",
  computed: mapGetters(['getCurrentValue']),
  methods: mapActions([]),
}
</script>

<style scoped>
.total {
  font-size: 24pt;
  text-align: right;
  color: #2c3e50;
}

.current {
  text-align: right;
  vertical-align: bottom;
  font-size: 100pt;
  color: #3c546c;
}
</style>