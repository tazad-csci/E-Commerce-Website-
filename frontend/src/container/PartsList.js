import { connect } from "react-redux"
import PartsList from "../components/PartsList/PartsList";
import { setPartsList, setQtyCart } from "../redux/actions";

const mapStateToProps = (state) => ({
    // items: state.parts.parts.slice(0,50) || [],
    items: state.cart.items,
    total: state.cart.total,
    qty: state.cart.qty,
    weight: state.cart.weight,
    shipping: state.cart.shipping_cost,
})

const mapDispatchToProps = dispatch => ({
    set_qty: (item, new_qty)=>{
        dispatch(setQtyCart(item, new_qty));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PartsList);
