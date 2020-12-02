import { connect } from "react-redux"
import Gallery from "../components/Gallery/Gallery";
import { addToCart } from "../redux/actions";

const mapStateToProps = (state) => {
    var items = state.parts.parts;
    if(state.parts.filter){
        items = state.parts.parts.filter(item=>{
            return JSON.stringify(item).toLowerCase().includes(state.parts.filter.toLowerCase())
        })
    }
    return {
        data: items,
    }
}

const mapDispatchToProps = dispatch => ({
    add_to_cart: (item, qty)=>{
        dispatch(addToCart(item, qty));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
