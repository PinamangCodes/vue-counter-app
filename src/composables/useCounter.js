import { useStore } from "vuex";


export default function useCounter() {

    const store = useStore()

    const increment=()=> {
      store.dispatch('increment', 1)
    }

    const decrement=()=> {
      store.dispatch('decrement', 1)
    }


    const reset= () =>{
      store.dispatch('reset', 0)
    }

    const set= (payload)=> {
        store.dispatch('setValue', payload )
      }

  return {
    increment,
    decrement,
    reset,
    set
  }
}