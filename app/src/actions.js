
import * as types from './actionsTypes'

export const addDocumentToAgendaItem = docId => ({
  type: types.ADD_DOCUMENT_TO_AGENDA_ITEM,
  payload: docId
})
