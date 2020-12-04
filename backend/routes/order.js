var express = require('express');
var router = express.Router();
var axios = require('axios');
const pools = require('../functions/Pools');
const Email = require('../functions/Email');

function decreaseQuantity(num, qty) {
    pools.query_new(`update inventory set onHand = onHand - ${qty} where partNumber = ${num}`, (data) => {

    });
}

function finalizeOrder(card_info, parts, auth) {
    console.log()
    pools.query_new(`insert into shippingInfo(full_address, full_name, email) values ("${card_info.address}", "${card_info.name}","${card_info.email}")`, (res) => {
        shipping_id = res.insertId;
        pools.query_new(`insert into orders (orderNumber, statusText, amount, shippingID, creditAuth) VALUES ("${card_info.trans}","auth","${card_info.amount}",${shipping_id},"${auth}")`, (res) => {
            order_id = res.insertId;
            parts.forEach(part => {
                pools.query_new(`insert into partsForOrder(orderID, partNumber, partName, partWeight, partCost, qty) values (${order_id},${part.part.number},"${part.part.description}",${part.part.weight},${part.part.price},${part.qty})`, ()=>{
                })
            });
            Email.sendConfirmation(card_info.email, card_info.trans, parts);
        })
    })
    console.log("done")
}


router.get('/orders/:incShipped', (req, res, next) => {
    var incShipped = req.params.incShipped;
    console.log("shipping ", incShipped)
    pools.query_new(`select * from orders inner join shippingInfo on orders.shippingID = shippingInfo.shippingID ${incShipped == 1 ? '' : 'where orders.statusText = "auth"'};`, (data) => {
        order_list = data;
        pools.query_new('select * from partsForOrder;', (data) => {
            parts_included = data;
            res.json({
                order_list, parts_included
            })
        })
    })
})

router.post('/setShipped', (req, res, next) => {
    pools.query_new(`update orders set statusText = "shipped" where orderID = ${req.body.order_id}`, data=>{
        console.log("Yeet!")
        res.json(data);
        pools.query_new(`select * from orders inner join shippingInfo on orders.shippingID = shippingInfo.shippingID where orderId = ${req.body.order_id}`, (data)=>{
            console.log("Hi!", data)
            Email.sendShipped(data[0].email, data[0].orderNumber);
        });
    })
})

router.post('/checkout', function (req, res, next) {
    data = req.body
    if (data) { 
        // console.log(data)
        data.cardInfo.vendor = "Group6A-Test"
        time_ms = (new Date().getTime()) + ""
        data.cardInfo.trans = "9005-" + time_ms.slice(time_ms.length - 10, time_ms.length) + "-" + Math.floor(Math.random() * 10000);
        // data.cardInfo.amount = 0;


        // data.items.forEach(item => {
        //     data.cardInfo.amount += item.qty * item.part.price
        // });


        if(data.cardInfo.amount > 0)
        axios.post('http://blitz.cs.niu.edu/CreditCard/', data.cardInfo)
            .then(
                (res_data) => {

                    if (res_data.data && res_data.data.errors === undefined) {
                        finalizeOrder(data.cardInfo, data.items, res_data.data.authorization)
                        data.items.forEach(item => {
                            decreaseQuantity(item.part.number, item.qty);
                        });
                        // console.log(res_data.data)
                        res.json({
                            auth: res_data.data.authorization,
                            id: data.cardInfo.trans,
                        })
                    } else {
                        console.log(res_data.data.errors)
                        res.send(500);
                    }
                }
            ).catch((err) => {
                console.log(err)
                res.send(500);
            }
            )
            else
            res.send(500);
    }
})

module.exports = router;

// 'vendor' => 'VE001-99',
// 	'trans' => '907-987654321-296',
// 	'cc' => '6011 1234 4321 1234',
// 	'name' => 'John Doe', 
// 	'exp' => '12/2020', 
// 	'amount' => '654.32');