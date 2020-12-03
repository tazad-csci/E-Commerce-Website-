import { connect } from "react-redux"
import CheckoutModal from "../components/CheckoutModal/CheckoutModal";
import APICalls from "../functions/APICalls";
import { addToCart, clearCart, setPartsList } from "../redux/actions";

const mapStateToProps = (state) => ({
    total: state.cart.total,
    weight: state.cart.weight,
    qty: state.cart.qty,
    items: state.cart.items
})

const mapDispatchToProps = dispatch => ({
    refreshData: ()=>{
        APICalls.parts.list((data)=>{
            dispatch(setPartsList(data));
        })
        dispatch(clearCart());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
