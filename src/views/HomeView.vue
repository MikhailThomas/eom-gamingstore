<template>
<filterCom/>
 <carousel />
 <productCard />
</template>

<script>
import carousel from '../components/carousel.vue'
import productCard from '../components/productCard.vue'
import filterCom from '../components/filterCom.vue'
export default {
  components: { carousel, productCard, filterCom},
  computed: {
    slide() {
      return this.$store.state.slide
    }
  }
}
</script>

<style scoped>

</style>