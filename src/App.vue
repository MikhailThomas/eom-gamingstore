<template>
<div class="cont">
  <div id="cloud-intro"><navbar/>
  <router-view/>
  <footerCom/></div>
</div>
  
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
  text-align: center;
}
.cont{
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color:black;
}
.cont{
  background-color: rgb(48, 46, 46);
}
#cloud-intro{
  height: 100%;
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png);
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png) 0 200px,
              url(https://static.radulescu.me/examples/clouds/clouds1200_1.png) 0 300px,
              url(https://static.radulescu.me/examples/clouds/clouds1000_blur3.png) 100px 250px;
	animation: wind 20s linear infinite;
}
@keyframes wind{
  0% {
    background-position: 0 200px, 0 300px, 100px 250px;
  }
  100% {
    background-position: 1000px 200px, 1200px 300px, 1100px 250px;
  }

}
</style>
