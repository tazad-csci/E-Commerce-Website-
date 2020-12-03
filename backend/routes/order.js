var express = require('express');
var router = express.Router();
var axios = require('axios');
const pools = require('../functions/Pools');

function decreaseQuantity(num, qty){
    pools.query_new(`update inventory set onHand = onHand - ${qty} where partNumber = ${num}`, (data)=>{

    });
}

function finalizeOrder(card_info, parts, auth){
    pools.query_new(`insert into shippingInfo (full_address, full_name, email) values (${card_info.address}, ${card_info.name}, ${card_info.email})`, res=>{
        console.log(res)
        // pools.query_new(`insert into orders (orderNumber, amount, shippingID, creditAuth) VALUES (${card_info.trans},${card_info.amount},${},${auth})`, ()=>{})
    })
}

router.post('/checkout', function (req, res, next) {
    data = req.body
    if (data) {
        data.cardInfo.vendor = "Group6A-Test"
        data.cardInfo.trans = new Date();
        data.cardInfo.amount = 0;


        data.items.forEach(item => {
            data.cardInfo.amount += item.qty * item.part.price
        });

        axios.post('http://blitz.cs.niu.edu/CreditCard/', data.cardInfo)
            .then(
                (res_data)=>{

                    if(res_data.data  && res_data.data.errors === undefined){
                    data.items.forEach(item => {
                        decreaseQuantity(item.part.number, item.qty);
                    });
                    console.log(res_data.data.authorization)
                    res.json({
                        auth: res_data.data.authorization,
                        id: data.cardInfo.trans,
                    })}else{
                        res.send(500);
                    }
                }
            ).catch((err)=>{
                console.log(err)
                res.send(500);}
            )
    }
})

module.exports = router;

// 'vendor' => 'VE001-99',
// 	'trans' => '907-987654321-296',
// 	'cc' => '6011 1234 4321 1234',
// 	'name' => 'John Doe', 
// 	'exp' => '12/2020', 
// 	'amount' => '654.32');