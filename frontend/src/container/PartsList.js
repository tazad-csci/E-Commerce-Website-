import { connect } from "react-redux"
import PartsList from "../components/PartsList/PartsList";
import { setPartsList } from "../redux/actions";

const mapStateToProps = (state) => ({
    items: state.parts.parts.slice(0,50) || [],
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PartsList);
