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

<style>
#nav2{
    background-color: black;
}
button:hover{
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
</style>