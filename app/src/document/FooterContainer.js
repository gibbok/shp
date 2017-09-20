import { connect } from 'react-redux'
import Footer from './Footer'
import {addDocumentsToAgendaItems} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickButton: () => {
      dispatch(addDocumentsToAgendaItems())
    }
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
