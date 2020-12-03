var express = require('express');
var router = express.Router();
var axios = require('axios');
const pools = require('../functions/Pools');

router.post('/checkout', function (req, res, next) {
    data = req.body
    if (data) {
        data.cardInfo.vendor = "Group6A-Test"
        data.cardInfo.trans = new Date();
        data.cardInfo.amount = 0;


        data.items.forEach(item => {
            data.cardInfo.amount += item.qty * item.part.price
        });

        console.log(data)
        axios.post('http://blitz.cs.niu.edu/CreditCard/', data.cardInfo)
            .then(
                (data)=>{
                    console.log(data.data.authorization)
                    res.json({
                        auth: data.data.authorization,
                        id: data.cardInfo.trans,
                    })
                }
            ).catch(
                console.log
            )


    }
    res.send(200)
})

module.exports = router;

// 'vendor' => 'VE001-99',
// 	'trans' => '907-987654321-296',
// 	'cc' => '6011 1234 4321 1234',
// 	'name' => 'John Doe', 
// 	'exp' => '12/2020', 
// 	'amount' => '654.32');