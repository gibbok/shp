import { connect } from 'react-redux'
import AvailabilityDocs from './AvailabilityDocs'

const getAgendaDocs = state => {
  return state.agenda.data.agendaDocs
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaDocs: getAgendaDocs(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const AvailabilityDocsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AvailabilityDocs)

export default AvailabilityDocsContainer
