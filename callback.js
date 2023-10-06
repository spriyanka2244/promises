const cart=["shoes","pants","kurta"];
// pyramid of doom
//create order
//payment
//let we access to two backend api

//their is dependences like after create only we can payment
api.createOrder(cart, function() {

    api.proceedToPayment(function() {

        api.showOrderSummary(

            function(){
                api.updateWallet();

            });
    });
});

//createrOrder responsibities to create after to do payment

//payment is resposibility to show summary