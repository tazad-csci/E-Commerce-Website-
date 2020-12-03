import { combineReducers } from 'redux';
const { SET_PARTS_LIST, ADD_TO_CART, SET_QTY_CART, SET_FILTER } = require("../actions");

function parts(state = { filter: "", order_by: "", parts: [] }, action) {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, { filter: action.payload })
        case SET_PARTS_LIST:
            return Object.assign({}, state, { parts: action.payload });
        default:
            return state;
    }
}


function cart(state = { items: [], total: 0, qty: 0, weight: 0 }, action) {
    var items = [];
    switch (action.type) {
        case ADD_TO_CART:
            if(action.qty > action.part.on_hand)
                action.qty = action.part.on_hand;
            var item = {
                part: action.part,
                qty: action.qty
            }
            var exists = state.items.find(arri => {
                if (arri.part.number === item.part.number)
                    return true;
                else
                    return false;
            })

            if (exists !== undefined) {
                items = state.items.map(arri => {
                    if (arri.part.number === item.part.number) {
                        item.qty += parseInt(exists.qty)
                        if(item.qty > item.part.on_hand)
                            item.qty = item.part.on_hand;
                        return item;
                    } else {
                        return arri;
                    }
                })
            } else {
                items = [...state.items, item];
            }
            break;
        case SET_QTY_CART:
            items = state.items.map(item => {
                var part = item.part;
                var qty = item.qty;
                if (part.number === action.part.number) {
                    return {
                        part: action.part,
                        qty: action.qty
                    }
                } else {
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
    var weight = 0;
    items.forEach(item => {
        qty += parseInt(item.qty);
        total += item.qty*item.part.price;
        weight += item.qty*item.part.weight;
    });

    return Object.assign({}, state, {items, total, qty, weight});
}

const reducers = combineReducers({
    parts,
    cart
});

export default reducers;