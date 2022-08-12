<template>
  <navbar/>
  <router-view/>
  <footerCom/>
</template>

<script>
import navbar from './components/navbar.vue'
import bag from './components/bag.vue'
import footerCom from './components/footerCom.vue'
import filter from './components/filterCom.vue'
export default {
  name: 'App',
  components: {
    navbar,
    bag,
    footerCom,
    filter
  }
}
</script>


<style>
::-webkit-scrollbar{
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
