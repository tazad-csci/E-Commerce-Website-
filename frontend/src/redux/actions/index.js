export const  SET_PARTS_LIST = 'SET_PARTS_LIST';
export const  SET_FILTER = 'SET_FILTER';

export const  SET_SHIPPING = 'SET_SHIPPING';

export const  ADD_TO_CART = 'ADD_TO_CART';
export const  SET_QTY_CART = 'SET_QTY_CART';
export const  CLEAR_CART = 'CLEAR_CART';


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

export var setShipping = (shipping) => (
    {
        type: SET_SHIPPING,
        payload: shipping
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
export var clearCart = () => (
    {
        type: CLEAR_CART,
    }
)