<template>
<div id="search">
    <div v-if="products" class="mt-3">
      <input
        type="text"
        class="searchTerm"
        placeholder="Search..."
        v-model="search"
      />
      <button type="submit" class="searchButton">
        <i class="bi bi-search"></i>
      </button>
    </div>
  </div>
  <div class="btn-group">
    <button id="filter" class="btn" type="button">
      <select class="form-select" id="price" @change="sortPrice">
        <option value="All">Sort By Price</option>
        <option value="asc">Lowest To Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
    </button>
    <button id="filter" class="btn" type="button">
      <select class="form-select" id="order" @change="AZ()">
        <option value="All">order in</option>
        <option value="asc">Ascending order</option>
        <option value="desc">Descending order</option>
      </select>
    </button>
  </div>
  <div id="page" class="container mx-auto">
    <div class="new-card row d-flex justify-content-around" v-if="products">
      <div
        class="card col-sm-3 mx-2 my-3"
        v-for="product in products"
        :key="product"
      >
        <div class="side front-card">
          <router-link
            :to="{ name: 'productPage', params: { id: product.productid } }"
          >
            <div class="image mt-3"><img class="img-fluid" :src="product.img" alt="" /></div>
            <div class="info">
              <h2>R{{ product.price }}.00</h2>
              <h3>{{ product.title }}</h3>
              <button class="btn">View more</button>
              <!-- </router-link> -->
            </div>
          </router-link>
        </div>
        <bag />
      </div>
    </div>
    <div v-else>
      <h2>Loading ...</h2>
    </div>
  </div>
</template>

<script>
import bag from './bag.vue'

export default {
  components: {
    bag
  },
  data() {
    return {
      search: "",
      genre: "All",
      asc: true,
    };
  },
  methods: {
    sortPrice() {
      let up = document.getElementById("price").value;
      if (up === "asc") {
        this.$store.state.products.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        this.$store.state.products.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    AZ() {
      let up = document.getElementById("order").value;
      if (up === "asc") {
        this.$store.state.products.sort((a, b) => {
          return a.title > b.title;
        });
      } else {
        this.$store.state.products.sort((a, b) => {
          return b.title < a.title;
        });
      }
    },
  },
computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        if (this.genre !== "All" && this.genre !== product.genre) {
          isMatch = false;
        }
        let up = document.getElementById("order").value;
        return isMatch;
      });
    },
    // products() {
    //   return this.$store.state.products;
    // },
  },

  mounted() {
this.$store.dispatch("getProducts")
  },
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
  border: hidden;
  border-radius: 10px;
  transition: 0.44s;
  text-align: center;
  margin: auto;
  padding: 0%;
}

.card {
  transition: 0.44s linear;
  color: black;
  background-color: rgba(0, 0, 0, 0.444);
}
.card:hover{
  transform: scale(1.07) skewY(0deg);
  transition: 0.44s linear;
}

.img-fluid{
  height: 100%;
    width: 100%;
    object-fit: cover;
}
img:hover{
  border-radius: 40px;
  transform: scale(1.07) skewY(0deg);
  transition: 0.44s linear;
  color: #03e9f4;
}

.card {
  cursor: pointer;
  border: none;
}

.image{
  margin: auto;
}
div.image {
  background-color: #dadce2;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  object-fit: contain;
}

.btn{
  color: #ffffff;;
}

h2, h3 {
  text-align: center;
  color: #03e9f4;
}
h3{
  text-decoration: underline;
  text-decoration-color: white;
}

.info{
  margin-top: 30px
}

a{
  text-decoration: none;
}
</style>