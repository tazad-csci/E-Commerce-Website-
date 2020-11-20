const { SET_PARTS_LIST } = require("../actions");

function parts(state = {filter: "", order_by: "", parts: []}, action){

    var should_sort = false;
    var new_state;
    switch (action.type) {
        case SET_FILTER:
            
            break;
        case SET_PARTS_LIST:
            should_sort = true;
            new_state = Object.assign({}, state, { parts: action.payload });
            break;
        default:
            new_state = state;
            break;
    }

    if(should_sort){

    }

    return new_state;
}


{

    parts: {
        filter: "",
        sort_by: "",
        list: []
    }

}