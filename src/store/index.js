import router from "@/router";
import axios from 'axios'
import {
  ssrContextKey
} from "vue";
import {
  createStore
} from "vuex";

let nodeEOMP = "https://mmgaming.herokuapp.com/";
export default createStore({
  state: {
    slide: [{
        img: "https://i.postimg.cc/76xp1hTM/Apex-Legends.jpg"
      },
      {
        img: "https://i.postimg.cc/2jHfwQGq/cod.jpg"
      },
      {
        img: "https://i.postimg.cc/k4fLTCQr/f122.jpg"
      },
      {
        img: "https://i.postimg.cc/5t5hFLj2/gothamknights.jpg"
      },
      {
        img: "https://i.postimg.cc/HsR1GTfd/pokemon.jpg"
      },
      {
        img: "https://i.postimg.cc/3NqVHZfn/xbox.jpg"
      },
    ],
    filter: [{
        name: "Price low - high"
      },
      {
        name: "Price high - low"
      },
      {
        name: "A-Z"
      },
      {
        name: "Z-A"
      },
      {
        name: "genre"
      }
    ],
    products: null,
    product: null,
    users: null,
    user: null,
    cart: null,
  },
  getters: {},
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUser: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://mmgaming.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setProducts", data.results));
    },
    fetchSingleProduct : async (context, id) => {
      fetch("https://mmgaming.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results)
          context.commit('setProduct', data.results)
          });
    },
    // REGISTER user to mysqldb   
    register: async (context, payload) => {
      const {
        fullName,
        email,
        password,
        phoneNumber,
        userRole,
      } = payload
      fetch("https://mmgaming.herokuapp.com/users", {
          method: "POST",
          body: JSON.stringify({
            fullName: fullName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            userRole: userRole,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "you have registered successfully: 1") {
            alert(data.msg);
            let user = data.user;
            let token = data.token;
            context.commit("setuser", user);
            context.commit("setToken", token);
            context.dispatch("getProducts");
            router.push({
              name: "products",
            })
          } else {
            alert(data.msg);
            document.getElementById("register").reset();
          }
        });
      router.push("/login")
    },
//login
login: async (context, payload) => {
  const { email, password } = payload;
  // fetch("https://mmgaming.herokuapp.com/login", {
  //   method: "POST",
  //   // mode: 'no-cors',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //   })
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
      // alert(data.msg);
      // let {results} = data;
      // let token = data.token;
      // let cart = data.users.cart;
    //  console.log(results);
      // context.commit("setusers", users);
      // context.commit("setToken", token);
      // context.commit("setcart", cart);
      // router.push({
      //   name: "home"
      // })
    // });
    let data = {
      email,
      password
    }
    try{
      let res = await axios.post(nodeEOMP+"login", {
              email: data.email,
              password: data.password,
      });
      console.log(res.data)
    }catch(e) {
      console.log(`e.message: ${e.message}`);
      console.log(e.response + "res");
      console.log(e.request);
    }
    router.push({
        name: "home"
      })
},




  // Deletes user from db
  deleteuser: async (context, id) => {
    fetch("http://localhost:3000/users/" + id, {
        method: "DELETE",
        headers: {
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then(() => context.dispatch("getusers"));
  },
  // update user infor
  updateUser: async (context, user) => {
    fetch("http://localhost:3000/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        context.dispatch("getusers");
      });
  },
  // getuser : async (context) => {
  //   fetch("http://localhost:3000/verify")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     context.commit("setuser", data.user)
  //   })
  // },
  // retrieves all users
  getusers: async (context) => {
    fetch("http://localhost:3000/users", {
        headers: {
          "x-auth-token": await context.state.token,
        },
      })
      // fetch("https://picknpay-apitest.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        context.commit("setusers", data.results);
      });
  },
  // retrieves all users
  getusers: async (context) => {
    fetch("http://localhost:3000/users", {
        headers: {
          "x-auth-token": await context.state.token,
        },
      })
      // fetch("https://picknpay-apitest.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        context.commit("setusers", data.results);
      });
  },
  // Cart stuffs
  getCart: async (context, id) => {
    id = context.state.user.id;
    fetch("http://localhost:3000/users/" + id + "/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg)
        console.log(data);
        let cart = JSON.stringify(data);
        context.commit("setcart", cart);
      });
  },
  deleteCart: async (context, userid) => {
    userid = context.state.user.id
    fetch("http://localhost:3000/users/" + userid + "/cart", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg)
        context.dispatch("getCart")
        context.state.cart = null
      })
  },
  addToCart: async (context, id, userid) => {
    userid = context.state.user.id;
    fetch("http://localhost:3000/users/" + userid + "/cart", {
        // fetch("http://localhost:3000/users/" + id +"/cart",{
        // fetch("https://picknpay-apitest.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify(id),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(id);
        alert(data.msg);
        context.dispatch("getCart");
      });
  },
  },


  modules: {},
});