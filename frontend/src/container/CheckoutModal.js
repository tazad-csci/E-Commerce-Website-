import { connect } from "react-redux"
import CheckoutModal from "../components/CheckoutModal/CheckoutModal";
import { addToCart } from "../redux/actions";

const mapStateToProps = (state) => ({
    total: state.cart.total,
    weight: state.cart.weight,
    qty: state.cart.qty,
    items: state.cart.items
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
