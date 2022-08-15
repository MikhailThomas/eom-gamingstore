<template>
  <div id="nav2" class="sticky-top">
    <div v-for="filters in filter" :key="filters" class="btn-group">
  <button id="filter" class="btn" type="button">
    {{ filters.name }}
  </button>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    filter() {
      return this.$store.state.filter
    }
  }
}
</script>

<style scoped>
#nav2{
    background-color: black;
}
#filter.btn{
  border: hidden;
}
#filter.btn:hover{
  color: #fff;
  border: none;
  border-radius: 5px;
}
</style>