<template>
  <div>
    <div class="button-wrapper">
      <Screen class="screen"/>
      <AuxiliaryButton :text="'AC'" class="butt"/>
      <AuxiliaryButton :text="'CE'" class="butt"/>
      <MathButton :mathAction="'+/-'" class="butt"/>
      <MathButton :mathAction="'/'" class="butt"/>
      <NumberButton :number="7" class="butt"/>
      <NumberButton :number="8" class="butt"/>
      <NumberButton :number="9" class="butt"/>
      <MathButton :mathAction="'*'" class="butt"/>
      <NumberButton :number="4" class="butt"/>
      <NumberButton :number="5" class="butt"/>
      <NumberButton :number="6" class="butt"/>
      <MathButton :mathAction="'-'" class="butt"/>
      <NumberButton :number="1" class="butt"/>
      <NumberButton :number="2" class="butt"/>
      <NumberButton :number="3" class="butt"/>
      <MathButton :mathAction="'+'" class="butt"/>
      <NumberButton :number="0" class="butt"/>
      <NumberButton :number="','" class="butt"/>
      <MathButton :mathAction="'='" class="butt equal"/>
    </div>
  </div>
</template>

<script>

import NumberButton from "./components/Number-button";
import AuxiliaryButton from "./components/Auxiliary-button";
import MathButton from "./components/Math-button";
import Screen from "./components/Screen";

export default {
  name: 'App',
  components: {
    Screen,
    MathButton,
    AuxiliaryButton,
    NumberButton

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button-wrapper {
  margin: auto;
  width: 85%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, 100px);
  grid-auto-columns: minmax(100px, 100px);
}

.butt, .screen {
  min-width: 130px;
  font-size: 64pt;
  color: #0037de;
  border: 3px solid #ccc;
  border-radius: 20px;
  background: rgba(212, 212, 212, 0.48);
  cursor: pointer;
}

.butt:hover {
  transition: 0.15s ease-in-out;
  background: #ffce34;
}

.equal {
  grid-column: 3 / 5;
}

.screen {
  background: whitesmoke;
  grid-column: 1 / 5;
  grid-row: 1 / 3;
}
</style>
