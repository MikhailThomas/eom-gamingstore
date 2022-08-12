<template>
 <carousel />
 <productCard />
</template>

<script>
import carousel from '../components/carousel.vue'
import productCard from '../components/productCard.vue'
export default {
  components: { carousel, productCard},
  computed: {
    slide() {
      return this.$store.state.slide
    }
  }
}
</script>

<style scoped>

</style>