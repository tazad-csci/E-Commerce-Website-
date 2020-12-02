import { combineReducers } from 'redux';
const { SET_PARTS_LIST, ADD_TO_CART, REM_FROM_CART, SET_QTY_CART, SET_FILTER } = require("../actions");

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
            items = [...state, item];
            break;
        case REM_FROM_CART:
            break;
        case SET_QTY_CART:
            items = [...state];
            items = items.map(item => {
                var part = item.part;
                var qty = item.qty;
                if(part.id === action.part.id){
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
            items = state;
            break;
    }

    //filter out if qty = 0;
    //calc the total qty
    //calc the total cost

    return items;
}

const reducers = combineReducers({
  parts,
  cart
});

export default reducers;