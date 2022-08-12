<template>
<section id="page" class="container">
  <div id="" class="row">
    <div class="col-md-6">
      <img id="product" src="https://i.postimg.cc/T1b1wB6M/assassains-creed.jpg{{ product.img }}" alt="">
    </div>
    <div class="col-md-6">
      <h1>name{{ product.productname }}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorem harum debitis quibusdam. Aliquid tenetur, vel nisi tempore voluptatem corrupti hic ipsam placeat laborum magni consequuntur, eum ipsum odit eius.</p>
      <h2>price{{ product.productprice }}</h2>
      <bag/>
    </div>
    <div id="preview">

    </div>
  </div>
 
</section>
</template>

<script>
import bag from '../components/bag.vue'

export default {
  components: {
    bag
  }
} 
</script>

<style>
#product{
border: solid;
}
</style>
