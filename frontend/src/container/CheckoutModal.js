import { connect } from "react-redux"
import CheckoutModal from "../components/CheckoutModal/CheckoutModal";
import APICalls from "../functions/APICalls";
import { addToCart, clearCart, setPartsList, setShipping } from "../redux/actions";

const mapStateToProps = (state) => ({
    total: state.cart.total,
    weight: state.cart.weight,
    qty: state.cart.qty,
    items: state.cart.items,
    shipping: state.cart.shipping_cost,
})

const mapDispatchToProps = dispatch => ({
    refreshData: ()=>{
        APICalls.parts.list((data)=>{
            dispatch(setPartsList(data));
        })
        dispatch(clearCart());
        APICalls.admin.getRules((data)=>{
            dispatch(setShipping(data));
          })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
