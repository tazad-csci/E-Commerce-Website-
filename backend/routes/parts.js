var express = require('express');
const query_legacy = require('../functions/Pools');
var router = express.Router();

/* GET parts listing. */
router.get('/', function (req, res, next) {
    query_legacy('select number from parts;', (data)=>{
        if(data){
            res.json(data);
        }else{
            res.send(500);
        }
    })
});

/* GET part number */
router.get('/:part_number', function (req, res, next) {
    var part_number = escape(req.params.part_number);
    query_legacy(`select * from parts where number=${part_number};`, (data)=>{
        if(data){
            // var part_info = data[0];
            // query_new(`select * from parts_inventory where number=${part_number}`, (data)=>{
            //     if(data){
            //         part_info.inventory = data[0].inventory;
            //         res.json(part_info);
            //     }
            // })
            res.json(data[0]);
        }else{
            res.send(500);
        }
    })
});

module.exports = router;
