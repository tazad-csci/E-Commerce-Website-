var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/checkout', function(req, res, next){
    data = req.body
    if(data){
        data.cardInfo.vendor = "Group6A-Test"
        data.cardInfo.trans = new Date();
        data.cardInfo.amount = 5;
        console.log(data) 

        axios.post('http://blitz.cs.niu.edu/CreditCard/', data.cardInfo)
        .then(
            console.log
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