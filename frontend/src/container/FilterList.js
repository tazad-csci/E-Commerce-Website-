import { connect } from "react-redux"
import FilterList from "../components/FilterList/FilterList";
import { setFilter } from "../redux/actions";

const mapStateToProps = (state) => ({
    cur_filer: state.parts.filter,
})

const mapDispatchToProps = dispatch => ({
    change_filter: (new_filter) => {
        console.log("OOP", new_filter)
        dispatch(setFilter(new_filter));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
