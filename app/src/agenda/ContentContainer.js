import { connect } from 'react-redux'
import Content from './Content'

const getAgendaItems = state => {
  return state.agenda.data.agendaItems
}

const mapStateToProps = (state, ownProps) => {
  return {
    agendaItems: getAgendaItems(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const ContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

export default ContentContainer
