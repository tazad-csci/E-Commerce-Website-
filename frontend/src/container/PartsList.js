import { connect } from "react-redux"
import PartsList from "../components/PartsList/PartsList";
import { setPartsList, setQtyCart } from "../redux/actions";

const mapStateToProps = (state) => ({
    // items: state.parts.parts.slice(0,50) || [],
    items: state.cart.items,
    total: state.cart.total,
    qty: state.cart.qty,
})

const mapDispatchToProps = dispatch => ({
    set_qty: (item, new_qty)=>{
        dispatch(setQtyCart(item, new_qty));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PartsList);
