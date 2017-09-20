
import * as types from './actionsTypes'

/*
 * Allocate documents to agenda items action.
 */
export const addDocumentsToAgendaItems = () => ({
  type: types.ADD_DOCUMENTS_TO_AGENDA_ITEMS,
  payload: undefined
})

/*
 * Add agenda item to agenda list items action.
 */
export const addItemToAgenda = (itemName) => ({
  type: types.ADD_ITEM_TO_AGENDA,
  payload: itemName
})
