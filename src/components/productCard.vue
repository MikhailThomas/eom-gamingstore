<template>
<router-link to="/productPage">
  <div id="page" class="container">
  <div class="new-card row" v-if="products">
  <div class="card col-sm-3 mx-5 my-3"  v-for="product in products" :key="product">
    <div class='side front-card'>
      <div class="image mt-3"><img :src="product.img" alt=""></div>
      <div class="info">
        <h2>R{{ product.price }}.00</h2>
      <h3>{{ product.title }}</h3>
      </div>
    </div>
  <bag/>
  </div>
</div>
<div v-else>
<h2>Loading ...</h2>
</div>
</div>
</router-link>
</template>

<script>
import bag from './bag.vue'

export default {
  components: {
    bag
  },
  mounted() {
this.$store.dispatch("getProducts")
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }
} 
const cards = document.querySelectorAll('.new-card');

function transition() {
  if (this.classList.contains('hidden')) {
    this.classList.remove('hidden')
  } else {
    this.classList.add('hidden');
  }
}

cards.forEach(card => card.addEventListener('click', transition));
</script>

<style scoped>
#page{
  padding: 3rem;
}

.new-card {
  border-radius: 10px;
  transition: 0.44s;
  text-align: center;
  margin: 0%;
  padding: 0%;
}

.card {
  transition: 0.44s linear;
  color: black;
}

img:hover{
  border-radius: 40px;
  transform: scale(1.07) skewY(0deg);
  transition: 0.44s linear;
  color: blue;
}

.card {
  cursor: pointer;
  border: none;
}

div.image {
  background-color: #dadce2;
  background-image: linear-gradient(140deg, white, #dadce2);
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  border-radius: 30px;
  border: solid;
}

h2 {
  text-align: center;
}

.info{
  margin-top: 30px;
}
</style>