import { connect } from 'react-redux'
import Document from './Document'

const getDocumentIsVisible = state => {
  return state.agenda.ui.document.isVisible
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDocumentVisible: getDocumentIsVisible(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const DocumentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Document)

export default DocumentContainer
