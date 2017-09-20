import { connect } from 'react-redux'
import AvailabilityCounter from './AvailabilityCounter'

const getAgendaDocsTotal = state => {
  return state.agenda.data.agendaDocs.length
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaDocsTotal: getAgendaDocsTotal(state)
  }
}

const AvailabilityCounterContainer = connect(
    mapStateToProps
  )(AvailabilityCounter)

export default AvailabilityCounterContainer
