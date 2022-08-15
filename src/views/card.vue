<template>
  <div id="page" class="container">
    <div id="card" class="card-checkout">
        <div class="card-logo"><img id="logo" src="https://i.postimg.cc/Vv4GDSyb/card.png" alt=""></div>
        <div class="card-options">
            <form class="card-details">
                <input class="cc-name" placeholder="Card Holder" required>
                <input class="cc-number" placeholder="Card Number" data-numeric required>
                <input class="cc-expiry inline" placeholder="Expiry Date" required><input class="cc-cvc" placeholder="CVC" data-numeric required>
                <button class="button button-scan">Scan Card</button>
            </form>
        </div>
        <div class="card-confirm">
            <button class="button button-confirm">Complete Order</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {return{

    }
    },
    mounted() {
        (function() {
    var ccName = $('input.cc-name'),
        ccNumber = $('input.cc-number'),
        ccExpiry = $('input.cc-expiry'),
        ccCVC = $('input.cc-cvc');
    
    $('[data-numeric]').payment('restrictNumeric');
    
    ccNumber.payment('formatCardNumber');
    ccExpiry.payment('formatCardExpiry');
    ccCVC.payment('formatCardCVC');
    
    ccName.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'Name Surname');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccNumber.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'xxxx xxxx xxxx xxxx');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccExpiry.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'MM/YYYY');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccCVC.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'xxxx');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
})();
    }
}

</script>

<style scoped>
#page{
    height: 100vh;
}
#logo{
    max-width: 100%;
    max-height: 100%;
}
.card-checkout {
    margin: auto;
    width: 30%;
    min-width: 300px;
    height: 70%;
    min-height: 400px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
}

.card-logo {
    width: 100%;
    height: 35%;
    background: url('http://digest.dx3canada.com/wp-content/uploads/2013/01/Visa-Logo.jpg');
    background-size: 100px 45px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card-options {
    width: 100%;
    height: 55%;
    padding: 10px;
    background-color: #3F8EDD;
}

.card-details {
    width: 100%;
    height: 100%;
}

.card-details input {
    width: 100%;
    height: 15%;
    padding: 10px 20px;
    margin-bottom: 1px;
    color: #fff;
    background-color: #4EA0F4;
    border: 0;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
}

.card-details input.inline {
    margin-right: 1px;
}

.card-details input.cc-expiry {
    width: 69.7%;
}

.card-details input.cc-cvc {
    width: 30%;
}

.card-details input::-webkit-input-placeholder {
    color: #C5DFFF;
}

.card-details input::-moz-placeholder {
    color: #C5DFFF;
}

.card-details input:-moz-placeholder {
    color: #C5DFFF;
}

.card-details input:-ms-input-placeholder {
    color: #C5DFFF;
}

.card-details input:placeholder-shown {
    color: #C5DFFF;
}

.card-confirm {
    position: relative;
    width: 100%;
    height: 10%;
}

.button {
    width: 100%;
    color: #fff;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    border: 0;
}

.button-confirm {
    height: 100%;
    background-color: #2EE940;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}

.button-confirm:focus {
    outline: 0;
}

.button-scan {
    height: 15%;
    background-color: #62AEFA;
    cursor: pointer;
}
</style>