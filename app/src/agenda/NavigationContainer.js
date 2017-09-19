import { connect } from 'react-redux'
import Navigation from './Navigation'

const getUiAgendaNavigation = state => {
  return state.agenda.ui.navigation
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaNavigation: getUiAgendaNavigation(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)

export default NavigationContainer
