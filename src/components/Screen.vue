<template>
  <div>
    <div class="total"><span>{{getTotalString}}</span></div>
    <div class="current"><span>{{ getCurrentValue }}</span></div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Screen",
  computed: mapGetters(['getCurrentValue', 'getTotalString']),
  methods: mapActions([]),
}
</script>

<style scoped>
.total {
  margin-right: 10px;
  font-size: 32pt;
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