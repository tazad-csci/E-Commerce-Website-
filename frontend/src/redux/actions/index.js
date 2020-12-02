export const  SET_PARTS_LIST = 'SET_PARTS_LIST';

export const  ADD_TO_CART = 'ADD_TO_CART';
export const  REM_FROM_CART = 'REM_FROM_CART';
export const  SET_QTY_CART = 'SET_QTY_CART';


export var setPartsList = (parts_list) => (
    {
        type: SET_PARTS_LIST,
        payload: parts_list,
    }
)

export var addToCart = (part, qty) => (
    {
        type: ADD_TO_CART,
        part, qty
    }
)
export var remFromCart = (part) => (
    {
        type: REM_FROM_CART,
        part
    }
)
export var setQtyCart = (part, qty) => (
    {
        type: SET_QTY_CART,
        part, qty
    }
)