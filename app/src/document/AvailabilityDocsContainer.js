import { connect } from 'react-redux'
import AvailabilityDocs from './AvailabilityDocs'
import {addDocumentToAgendaItem} from '../actions'

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
    onClickDocumentItem: (doc) => {
      dispatch(addDocumentToAgendaItem(doc.id))
    }
  }
}

const AvailabilityDocsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AvailabilityDocs)

export default AvailabilityDocsContainer
