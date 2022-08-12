import router from "@/router";
import {
  ssrContextKey
} from "vue";
import {
  createStore
} from "vuex";

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
        name: "catergory"
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
  },


  modules: {},
});