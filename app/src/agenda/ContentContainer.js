import { connect } from 'react-redux'
import Content from './Content'
import {addItemToAgenda} from '../actions'

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
    onKeyPressItem: (event) => {
      if (event.key === 'Enter') {
        console.log('Enter')
        dispatch(addItemToAgenda(event.target.value))
      }
    }

  }
}

const ContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

export default ContentContainer
