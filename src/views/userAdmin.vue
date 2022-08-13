<template>
<div class="content-profile-page">
   <div class="profile-user-page card">
      <div class="img-user-profile">
        <img class="profile-bgHome" src="" />
        <p></p>
           </div>
          <div class="user-profile-data">
              <h1>mikhail{{ name/surname }}</h1>
              <button>change image</button>
            <p>email{{ email }}</p>
          </div> 
          <div class="description-profile">
            <strong> date created </strong>
          </div>
       <ul class="data-user">
        <li><a><strong>logout{{ logout }}</strong></a></li>
        <li><a><strong><bag/></strong></a></li>
        <li><a><strong>Delete acc</strong></a></li>
       </ul>
      </div>
    </div>
  <table class="table table-bordered">
      <th><button>add product</button></th>
    <tbody>
      <div v-if="products">
        <tr v-for="product in products" :key="product.id">
        <td>{{product.productid}}</td>
        <td>{{product.title}}</td>
        <td>{{product.genre}}</td>
        <td>{{product.description}}</td>
        <td><img :src="product.img" alt=""></td>
        <td>{{product.price}}</td>
        <td>{{product.quantity}}</td>
        <td><button>edit</button></td>
        <td><button>delete</button></td>
        </tr>
      </div>
      <div v-else>No data</div>
    </tbody>
  </table>
</template>

<script>
import bag from '../components/bag.vue'
export default {
    components: {
        bag
    },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
td{
    border: 0.5px solid;
    border-bottom: lightblue solid;
}
img{
    max-height: 150px;
}
.content-profile-page {
  margin: 1em auto;
  width: 44.23em;
}

.card {
  background: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border: .1em solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1em; 
}

.profile-user-page .img-user-profile {
	margin: 0 auto;
  text-align: center; 
}
.profile-user-page .img-user-profile .profile-bgHome {
	border-bottom: .2em solid #f5f5f5;
  width: 44.23em;
  height: 16em;
  }
.profile-user-page .img-user-profile .avatar {
	margin: 0 auto;
  background: #fff;
  width: 7em;
  height: 7em;
  padding: 0.25em;
  border-radius: .4em;
  margin-top: -10em;
  box-shadow: 0 0 .1em rgba(0, 0, 0, 0.35);
}
.profile-user-page button {
  cursor: pointer;
  background: #3498db;
  border: 1px solid #2487c9;
  color: #fff;
  border-radius: 0 .6em 0 .6em ;
  padding: .80em;
}
.profile-user-page .user-profile-data, .profile-user-page .description-profile {
  text-align: center;
  padding: 0 1.5em; 
}
.profile-user-page .user-profile-data h1 {
  margin-top: 0.35em;
  color: #292f33;
  margin-bottom: 0; 
}
.profile-user-page .data-user {
  margin-bottom: 0;
  cursor: pointer;
  padding: 0;
  list-style: none;
  display: table;
  width: 100.15%; 
}
.profile-user-page .data-user li {
  margin: 0;
  padding: 0;
  width: 33.33334%;
  display: table-cell;
  text-align: center;
  border-left: 0.1em solid transparent; 
}
.profile-user-page .data-user li a, .profile-user-page .data-user li strong {
  display: block; 
}
.profile-user-page .data-user li a {
  background-color: #f7f7f7;
  border-top: 1px solid rgba(242,242,242,0.5);
  border-bottom: .2em solid #f7f7f7;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4),0 1px 1px rgba(255,255,255,0.4);
  padding: .93em 0;
}
.profile-user-page .data-user li a strong, .profile-user-page .data-user li a span {
  font-weight: 600;
  line-height: 1; 
}
.profile-user-page .data-user li a strong {
  font-size: 2em; 
}
.profile-user-page .data-user li a:hover {
  background: rgba(0, 0, 0, 0.05);
  border-bottom: .2em solid #3498db;
  color: #3498db; 
}
</style>
