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
    products: null,
    product: null,
    token: null,
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
    },
    getUser: (state, user) => {
      state.user = user;
    },
    setToken: (state, token) => {
      state.token = token;
      console.log(token)
    },
    setcart: (state, cart) => {
      let newCart = JSON.parse(cart);
      state.cart = newCart;
    },
  },
  actions: {
    logout: async (context) => {
      context.state.user = null;
      router.push("/");
    },
    sendHome: async (context) => {
      context.commit("setUser", null);
      router.push("/");
    },
    getProducts: async (context) => {
      fetch("https://mmgaming.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => { 
          context.commit("setProducts", data.results)
        }
        );
    },
    fetchSingleProduct : async (context, id) => {
      fetch("https://mmgaming.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results)
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
      },{
      headers: {
       'x-auth-token': context.state.token
      }
      }
      );
      // console.log(res.data)
      // console.log(res.data.token)
      // console.log(res.data.user)
      context.state.user = res.data.user
      context.state.token = res.data.token
      // console.log(context.state.token)
    }catch(e) {
      // console.log(`e.message: ${e.message}`);
      // console.log(e.response + "res");
      // console.log(e.request);
    }
    router.push({
        name: "home"  
      })
},



// edit item
EditProduct: async (context, product) => {
  fetch("https://mmgaming.herokuapp.com/products/" + product.id, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data.msg);
      context.dispatch("getProducts");
    });
},
  // Deletes user from db
  deleteuser: async (context, id) => {
    fetch("https://mmgaming.herokuapp.com/users/" + id, {
        method: "DELETE",
        headers: {
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then(() => context.dispatch("getusers"));
      // router.push({
      //   name: "home"
      // })
  },
  // Deletes Item from db
  deleteProduct: async (context, id) => {

    fetch("https://mmgaming.herokuapp.com/products/" + id, {
        method: "DELETE",
        headers: {
          "x-auth-token": context.state.token,
        },
      })
     
      .then((res) => res.json()) 
      .then((data) => {
        // console.log(data)
        alert(data.msg)
        context.dispatch("getProducts")});
  },
  // update user infor
  updateUser: async (context, user) => {
    fetch("https://mmgaming.herokuapp.com/users/" + user.id, {
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
  getUsers: async (context) => {
    fetch("https://mmgaming.herokuapp.com/users", {
        headers: {
          "x-auth-token": await context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        context.commit("setUsers", data.results);
      });
  },

getCart: async (context, id) => {
    id = context.state.user.id;
    fetch("https://mmgaming.herokuapp.com/users/" + id + "/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg)
        // console.log(data);
        let cart = JSON.stringify(data);
        context.commit("setcart", cart);
      });
  },
  //adding a product
  addProduct: async (context, payload) => {
    console.log(payload)
    console.log(context.state.user.id)
    const {
      title,
      genre,
      description,
      img,
      price,
      quantity,
    } = payload;
    fetch("https://mmgaming.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          genre: genre,
          description: description,
          img:img,
          price: price,
          quantity:quantity,
          createdby: context.state.user.id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": `${context.state.token}`,
        },
        mode:"no-cors"
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        context.dispatch("getProducts");
      });
  },
  // Cart stuffs
  
  deleteCart: async (context, userid) => {
    userid = context.state.user.id
    fetch("https://mmgaming.herokuapp.com/users/" + userid + "/cart", {
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
    if (context.state.user === null) {
      alert("Please login")
    } else {
      userid = context.state.user.id;
      fetch("https://mmgaming.herokuapp.com/users/" + userid + "/cart", {
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
    }
  },
  },
//delete one cart item
removeOne: async (context, id, userid) => {
  userid = context.state.user.id
  fetch("https://mmgaming.herokuapp.com/users/" + userid + "/cart/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data.msg)
      context.state.cart = null
      context.dispatch("getCart")
    })
},

  modules: {},
});