var express = require('express');
const pools = require('../functions/Pools');
var router = express.Router();

/* GET parts listing. */
router.get('/', function (req, res, next) {
    pools.query_legacy('select * from parts order by number;', (old_data)=>{
        if(old_data){
            pools.query_new('select * from inventory order by partNumber;', inventory_data=>{
                old_data = old_data.map(part => {
                    var part_inventory = inventory_data.find(function (data) {
                        return data.partNumber === part.number;
                    });
                    if(part_inventory)
                        part.on_hand = part_inventory.onHand;
                    else
                        part.on_hand = 0;
                    return part;
                })
                res.json(old_data);
            })
        }else{
            res.send(500);
        }
    })
});

/* GET part number */
router.get('/:part_number', function (req, res, next) {
    var part_number = escape(req.params.part_number);
    pools.query_legacy(`select * from parts where number=${part_number};`, (data)=>{
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

router.post('/setQTY', (req, res, next)=>{
    var data = req.body;
    pools.query_new(`update inventory set onHand = ${data.onHand} where partNumber = ${data.partNumber};`, data=>{
        res.json(data);
    })
})

module.exports = router;
