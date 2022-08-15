<template>
<div class="container">
  <div class="contact-box row py-3 my-3">
      <h2>Contact Us</h2>
      <div class="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6616.56200309459!2d18.491513387829325!3d-33.98531535768104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Imam%20Haron%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1660223870057!5m2!1sen!2sza"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="col-md-6">
        <input type="text" class="field" placeholder="Your Name">
        <input type="text" class="field" placeholder="Your Email">
        <input type="text" class="field" placeholder="Phone">
        <textarea placeholder="Message" class="field"></textarea>
        <div class="user-box">
        <div class="login-box"> <a href="#" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {

}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe{
  width: 100%;
  height: 400px;
}

.contact-box{
  max-width: 850px;
  background-color: black;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
  border-radius: 10px;
}

.left{
  background: url("https://i.ibb.co/z4wgBG3/bgg-min.jpg") no-repeat center;
  background-size: cover;
  height: 100%;
}

.right{
  padding: 25px 40px;
}

h2{
  color: white;
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
}

h2:after{
    margin: auto;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #03e9f4;
}

.field{
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: white;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;
}

.field:hover{
  background-color: rgba(0, 0, 0, 0.1);
}

textarea{
  min-height: 150px;
}

.btn{
  width: 100%;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .3s;
}



.field:focus{
    border: 2px solid rgba(30,85,250,0.47);
    background-color: #fff;
}

.login-box a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
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