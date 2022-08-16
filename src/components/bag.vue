<template>
   <div  v-if="cart" class="container">
    <div id="heading" class="py-1 my-3">
      <h1><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h1>
							</div>
					<div  v-for="item in cart" :key="item" :item="item" id="table" class="row mt-2">
						<div class="col-3 my-auto"><img id="image" class="img-responsive" src="https://i.postimg.cc/Y97TSQsG/card.png">
						</div>
						<div class="col-4 my-auto">
							<h4 class="product-name"><strong>Product name{{item.title}}</strong></h4>
						</div>
                <div class="col-2 my-auto">
                  <h5>Quantity{{item.quantity}}</h5>
                  <span class="my-auto"><h6>1</h6></span>
                </div>
              <div class="col-2 my-auto">
                <h5>Price{{item.price}}</h5>
                <span class="my-auto"><h6><strong>R25.00<span class="text-muted">x</span></strong></h6></span>
              </div>
              <div class="col-1 my-auto">
                <button type="button" class="btn btn-link">
                  <i class="bi bi-trash"></i>
								</button>
              </div>
          </div>
          <!-- end -->
          <div id="table2" v-for="item in cart" :key="item" :item="item" class="row">
						<div class="col-2 my-auto"><img id="image" class="img-responsive" src="https://i.postimg.cc/SxXw9JKd/heavy.gif">
						</div>
            <div class="col-2 my-auto"><img id="image2" class="img-responsive" src="https://i.postimg.cc/sfk2G17J/metal-slug.gif">
						</div>
						<div class="col-3 my-auto"   >
							<h3 class="product-name"><strong>TOTAL</strong></h3>
						</div>
                <div class="col-2 my-auto">
                  <h5>Quantity</h5>
                  <span class="my-auto"><h6>1</h6></span>
                </div>
              <div class="col-2 my-auto">
                <h5>Price</h5>
                <span class="my-auto"><h6><strong>R25.00<span class="text-muted">x</span></strong></h6></span>
              </div>
              <div class="col-1 my-auto">
                <button type="button" class="btn btn-link">
                  <i class="bi bi-trash"></i>
								</button>
              </div>
          </div>
				</div>
</template>

<script>
export default {
  mounted() {
    // this.$store.dispatch("getUser")
    this.$store.dispatch("getCart")
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      let prices = this.$store.state.cart
      let sum = prices.reduce((x, cart) => {
        // return console.log(x)
        return x + cart.price
      }, 0)
      return sum
    }
  },
  num: function() {
    let Cnum = this.$store.state.cart;
    if ((Cnum === null) || (Cnum === undefined)){
      Cnum = 0;
      return Cnum;
    } else {
      // Cnum.length
      let i = Cnum.length
      return i;
    }
    },
  methods: {
    removeAll() {
      this.$store.dispatch("deleteCart");
    },
  },
};

</script>

<style>#heading{
  color: #03e9f4;
  background: rgba(255, 255, 255, 0.411);
}

#table{
  background: rgba(0, 0, 0, 0.914);
  color: rgb(255, 255, 255);
  justify-content: center;
  margin: auto;
  min-height: 100px;
}

#table2{
  color: rgba(0, 0, 0, 0.914);
  background: rgb(255, 255, 255);
  justify-content: center;
  margin: auto;
  min-height: 100px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

#image{
  max-width: 100px;
}

#image2{
  max-width: 100px;
  animation: run linier;
}

input{
  border: hidden;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  /* margin-top: 40px; */
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
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
  top: -100%;
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
  right: -100%;
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
  bottom: -100%;
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
</style>