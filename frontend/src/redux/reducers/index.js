import { combineReducers } from 'redux';
const { SET_PARTS_LIST, ADD_TO_CART, SET_QTY_CART, SET_FILTER } = require("../actions");

function parts(state = {filter: "", order_by: "", parts: []}, action){
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, {filter: action.payload})
        case SET_PARTS_LIST:
            return Object.assign({}, state, { parts: action.payload });
        default:
            return state;
    }
} 


function cart(state = {items:[], total: 0, qty: 0}, action) {
    var items = [];
    switch (action.type) {
        case ADD_TO_CART:
            var item = {
                part: action.part,
                qty: action.qty
            }
            items = [...state.items, item];
            break;
        case SET_QTY_CART:
            items = state.items.map(item => {
                var part = item.part;
                var qty = item.qty;
                if(part.number === action.part.number){
                    return {
                        part: action.part,
                        qty: action.qty
                    }
                }else{
                    return item;
                }
            })
            break;
        default:
            return state;
    }

    items = items.filter(item => {
        return item.qty > 0
    })

    var total = 0;
    var qty = 0;
    items.forEach(item => {
        qty += parseInt(item.qty);
        total += item.qty*item.part.price;
    });

    return Object.assign({}, state, {items, total, qty});
}

const reducers = combineReducers({
  parts,
  cart
});

export default reducers;