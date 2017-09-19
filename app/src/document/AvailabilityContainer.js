import { connect } from 'react-redux'
import Availability from './Availability'
import {addDocumentToAgendaItem} from '../actions'

const getAgendaDocsTotal = state => {
  return state.agenda.data.agendaDocs.length
}
const getAgendaDocs = state => {
  return state.agenda.data.agendaDocs
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaDocsTotal: getAgendaDocsTotal(state),
    agendaDocs: getAgendaDocs(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickDocumentItem: (doc) => {
      dispatch(addDocumentToAgendaItem(doc.id))
    }
  }
}

const AvailabilityContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Availability)

export default AvailabilityContainer
