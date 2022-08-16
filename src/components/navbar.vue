<template>
  <!-- <div id="page">
    <div id="nav1">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <button
            id="button"
            class="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navcontent"
            aria-controls="navcontent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div class="collapse navbar-collapse" id="navcontent">
            <ul class="navbar-nav me-auto mb-lg-0 m-2">
              <li>
                <a class="nav-link" href="/"
                  ><img
                    id="logo"
                    src="https://i.postimg.cc/hvGRnvDP/logo.jpg"
                    alt="logo"
                /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">LOGIN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">REGISTER</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">CONTACT</a>
              </li>
              <div id="bag" class="side back-card my-auto">
                <div class="login-box">
                  <form>
                    <a
                      id="bag"
                      data-bs-toggle="modal"
                      data-bs-target="#modal"
                      href="/bag"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="bi bi-bag"></i>
                    </a>
                  </form>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="wrap">
          <div class="search px-3">
            <input type="text" class="searchTerm" placeholder="Search..." />
            <button type="submit" class="searchButton">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
        <ul id="profile" class="navbar-nav me-auto mb-lg-0 m-2">
          <li>
            <a class="nav-link" href="/user"><userImage /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div> -->
  <div id="page">
    <div id="nav1">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <button
            id="button"
            class="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navcontent"
            aria-controls="navcontent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div class="collapse navbar-collapse" id="navcontent">
            <ul class="navbar-nav me-auto mb-lg-0 m-2">
              <div v-if="user" class="d-md-flex">
                <li>
                  <a class="nav-link" href="/user"
                    ><img
                      id="logo"
                      src="https://i.postimg.cc/hvGRnvDP/logo.jpg"
                      alt="logo"
                  /></a>
                </li>
                <li class="nav-item">
                  <h2>Welcome {{ user.fullName }} !</h2>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">HOME</router-link>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" href="/login">LOGIN</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/register">REGISTER</a>
                </li> -->
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact"
                    >CONTACT</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/card"
                    >Cart</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/userAdmin"
                    >ADMIN</router-link
                  >
                </li>
                <li>
                  <button class="btn" @click="logout">Logout</button>
                </li>
                 <li>
              <router-link class="nav-link" to="/user"><userImage /></router-link>
            </li>

              </div>
              <div v-else class="d-md-flex">
                <li>
                  <a class="nav-link" href="/user"
                    ><img
                      id="logo"
                      src="https://i.postimg.cc/hvGRnvDP/logo.jpg"
                      alt="logo"
                  /></a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">HOME</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/register"
                    >Register</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact"
                    >Contact</router-link
                  >
                </li>
              </div>
              <!-- <div class="side back-card my-auto">
                <div class="login-box">
                  <form>
                    <a href="/bag">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="bi bi-bag"></i>
                    </a>
                  </form>
                </div>
              </div> -->
            </ul>
          </div>
        </div>
        <div class="wrap d-md-flex">
          <!-- <div>
            <button class="btn" @click="logout">Logout</button>
          </div> -->
          <!-- <ul id="profile" class="navbar-nav me-auto mb-lg-0 m-2">
            <li>
              <a class="nav-link" href="/user"><userImage /></a>
            </li>
          </ul> -->
        </div>
      </nav>
      <!-- </div> -->
    </div>
  </div>
  <div
    class="modal fade"
    tabindex="-1"
    id="modal"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Clear
          </button>
          <a href="/card"
            ><button type="button" class="btn btn-primary">Checkout</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userImage from "./userImage.vue";
export default {
  components: {
    userImage,
  },
  methods: {
    logout() {
      console.log("Fired");
      this.$store.dispatch("logout");
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
#page {
  padding-bottom: 10px;
}
#nav1 {
  background-color: gray;
}
li {
  margin: auto;
  padding-left: 2px;
  padding-right: 2px;
}
.nav-link {
  color: white;
}

#logo {
  margin: auto;
  max-height: 50px;
  max-width: 50px;
}
#button {
  background-color: black;
  margin: auto;
}
a:hover .nav-link {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.search {
  width: 100%;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.searchButton {
  width: 30px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.wrap {
  margin: auto;
  width: 30%;
  max-height: 30px;
}
#filter {
  color: white;
  padding: 5px;
  margin: 5px 30px;
  margin-top: 0%;
}
#filter.btn:hover {
  background-color: #00b4cc;
}
a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

nav-link a:active {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
/* bag */
.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
}

.login-box a:hover {
  color: #fff;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 500px;
  z-index: 10000;
  overflow: auto;
  overflow-y: auto;
}

#product {
  max-width: 50px;
}
</style>
