import { connect } from 'react-redux'
import AgendaOptions from './AgendaOptions'

const getUiAgendaOptions = state => {
  return state.agenda.ui.agendaOptions
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaOptions: getUiAgendaOptions(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const AgendaOptionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AgendaOptions)

export default AgendaOptionsContainer
