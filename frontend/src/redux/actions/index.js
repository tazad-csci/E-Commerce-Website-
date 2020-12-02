export const  SET_PARTS_LIST = 'SET_PARTS_LIST';
export const  SET_FILTER = 'SET_FILTER';

export const  ADD_TO_CART = 'ADD_TO_CART';
export const  SET_QTY_CART = 'SET_QTY_CART';


export var setPartsList = (parts_list) => (
    {
        type: SET_PARTS_LIST,
        payload: parts_list,
    }
)
export var setFilter = (filter) => (
    {
        type: SET_FILTER,
        payload: filter,
    }
)

export var addToCart = (part, qty) => (
    {
        type: ADD_TO_CART,
        part, qty
    }
)
export var setQtyCart = (part, qty) => (
    {
        type: SET_QTY_CART,
        part, qty
    }
)