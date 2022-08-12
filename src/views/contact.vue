<template>
<div class="container">
    <div class="contact-box row py-3">
      <div class="col-md-6 my-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6616.56200309459!2d18.491513387829325!3d-33.98531535768104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Imam%20Haron%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1660223870057!5m2!1sen!2sza"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="col-md-6">
        <h2>Contact Us</h2>
        <input type="text" class="field" placeholder="Your Name">
        <input type="text" class="field" placeholder="Your Email">
        <input type="text" class="field" placeholder="Phone">
        <textarea placeholder="Message" class="field"></textarea>
        <button class="btn" type="">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {

}
</script>

<style>
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
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
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
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
}

h2:after{
  content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #2ecc71;
}

.field{
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
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
  background-color: #2ecc71;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .3s;
}

.btn:hover{
    background-color: #27ae60;
}

.field:focus{
    border: 2px solid rgba(30,85,250,0.47);
    background-color: #fff;
}

</style>