import { connect } from "react-redux"
import PartsList from "../components/PartsList/PartsList";

const mapStateToProps = (state) => ({
    items: state.parts.parts.slice(0,5),
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsList);
