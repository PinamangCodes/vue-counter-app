<template>
  <div class="counter">
    <center>
      <h1>Counter: {{ counter }}</h1> 
      <button @click="incrementCounter">Increment</button>
      <button @click="decrementCounter">Decrement</button>
      <button @click="resetCounter">Reset</button>
      <form @submit.prevent="setCounter(text)">
        <input v-model="text" type="number" />
        <button>set value</button>
      </form>

    </center>
  </div>
</template>

<script>
 import useCounter from "./composables/useCounter";
import { ref } from "vue";
export default {
  name: "vueCounter",
  setup() {
    const text = ref("");
    const { increment, decrement, reset, set } = useCounter();
    function incrementCounter() {
      increment();
    }
    function decrementCounter() {
      decrement();
    }
    function resetCounter() {
      reset();
    }
    function setCounter(input) {
      set(input);
    }
  
    return {
      setCounter,
      incrementCounter,
      decrementCounter,
      resetCounter,
      text,
    };
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },
};

  
  
</script>
