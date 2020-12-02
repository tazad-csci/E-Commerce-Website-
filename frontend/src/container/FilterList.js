import { connect } from "react-redux"
import PartsList from "../components/PartsList/PartsList";

const mapStateToProps = (state) => ({
    cur_filer: state.parts.filter,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PartsList);
