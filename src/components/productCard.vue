<template>
<div id="search ">
    <div v-if="products" class="justify-content-center mt-3">
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
  <div id="page" class="container">
    <div class="new-card row" v-if="products">
      <div
        class="card col-md-3 mx-5 my-3"
        v-for="product in products"
        :key="product"
      >
        <div class="side front-card">
          <router-link
            :to="{ name: 'productPage', params: { id: product.productid } }"
          >
            <div class="image mt-3"><img :src="product.img" alt="" /></div>
            <div class="info">
              <h2>R{{ product.price }}.00</h2>
              <h3>{{ product.title }}</h3>
              <!-- <router-link to="{name: 'productPage'}"> -->
              <button class="btn">View more</button>
              <!-- </router-link> -->
            </div>
          </router-link>
        </div>
        <!-- <button @click="addToCart" class="btn btn-info fs-3 text-black w-100">Add to cart</button> -->
        <button @click="addToCart" class="btn btn-info fs-3 text-black w-100">Add to cart</button>
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
     addToCart() {
      this.$store.dispatch("addToCart", 
      {
        id: this.productid,
      });
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
  border-radius: 10px;
  transition: 0.44s;
  text-align: center;
  margin: auto;
  padding: 0%;
}

.card {
  transition: 0.44s linear;
  color: black;
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
  color: blue;
}

.card {
  cursor: pointer;
  border: none;
}

div.image {
  background-color: #dadce2;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  object-fit: contain;
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