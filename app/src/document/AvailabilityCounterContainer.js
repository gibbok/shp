import { connect } from 'react-redux'
import AvailabilityCounter from './AvailabilityCounter'
import deepFreeze from 'deep-freeze'
import _ from 'lodash'

const getAgendaDocsTotal = state => {
  /*
   * Count how many documents are allocated to agenda items.
   */
  deepFreeze(state)
  const unMatchedDocs =
    _.cloneDeep(state.agenda.data.agendaDocs)
    .filter(item => item.agendaItemId === null)
  return unMatchedDocs.length
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
