export const  SET_PARTS_LIST = 'SET_PARTS_LIST';


export var setPartsList = (parts_list) => (
    {
        type: SET_PARTS_LIST,
        payload: parts_list,
    }
)