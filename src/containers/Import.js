// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes, deleteMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMake: (index) => dispatch(deleteMake(index)),
        fetchMakes: (index) => dispatch(fetchMakes(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Import)
