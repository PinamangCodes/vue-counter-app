<template>
  <div>
    <center>
      <h1>Counter: {{ counter }}</h1> />
      <button @click="increment">Increment</button>
      <button @click="reset">Reset</button>
    </center>
  </div>
</template>

<script>
export default {

  computed:{
    counter(){
      return this.$store.getters.counter
    },

    methods: {
      increment(){
        return this.$store.dispatch('increment')
      },

      reset(){
        return this.$store.dispatch('reset')
      }
  },
    
  }
  
  }
</script>
