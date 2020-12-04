var express = require('express');
var router = express.Router();
const pools = require('../functions/Pools');

/* GET hello world. */
router.get('/rules', function(req, res, next) {
    pools.query_new('select * from adminVariables order by rule_value;', data=>{
        res.json(data);
    })
});

router.post('/addRule', function(req, res, next){
    pools.query_new(`insert into adminVariables (cost, rule_value) values (${req.body.cost}, ${req.body.value})`, (data)=>{
        res.json(data)
    })
})

router.post('/remRule', function(req, res, next){
    console.log(req.body)
    pools.query_new(`delete from adminVariables where id = ${req.body.rule_id}`, (data)=>{
        res.json(data);
    })
})

module.exports = router;
