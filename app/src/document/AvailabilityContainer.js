import { connect } from 'react-redux'
import Availability from './Availability'

const getAgendaDocsTotal = state => {
  return state.agenda.data.agendaDocs.length
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaDocsTotal: getAgendaDocsTotal(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const AvailabilityContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Availability)

export default AvailabilityContainer
