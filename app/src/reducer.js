import dotProp from 'dot-prop-immutable'
import * as types from './actionsTypes'
import deepFreeze from 'deep-freeze'
import _ from 'lodash'
import {createGuid} from './utility'

/**
 * The initial, default state for the application.
 */
const initialState = {
  agenda: {
    data: {
      meetings: [
        {
          id: '8snp4k2ei17j7thk9sq',
          name: 'Monday initial meeting'
        }
      ],
      agendas: [
        {
          id: 'bs5eah84dvoj7thkw9k',
          meetingId: '8snp4k2ei17j7thk9sq',
          name: 'Main Agenda'
        }
      ],
      agendaItems: [
        {
          id: 'q2reqpuwrzj7thm7nr',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 1,
          name: 'Admin',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: '5su9t5jxeo5j7thmjgg',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 2,
          name: 'Minutes Last Meeting',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: 'n2a0zz01cej7thmpoo',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 3,
          name: 'Perfomance / Key Initiatives',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: 'tsdip6divkdj7thmxiw',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 4,
          name: 'Management Update',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: '1en1ebr8swlj7thn3z3',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 5,
          name: 'Country Managers Outlook',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: 'yrnmmu9jta8j7thn96f',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 5.1,
          name: 'Switzerland / Austria / Italy',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: 'p014eqtlvwj7thngc8',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 5.2,
          name: 'Germany',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: 'rr4600fkbenj7thnnqf',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 5.3,
          name: 'France',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: 'y3lw0bbvwzlj7thnt20',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 6,
          name: 'Sales Marketing',
          hasDocs: false,
          isReadOnly: true
        },
        {
          id: '4z3yt1d1z3bj7thnz8f',
          agendaId: 'bs5eah84dvoj7thkw9k',
          order: 7,
          name: 'Enter a new agenda item ...',
          hasDocs: false,
          isReadOnly: false
        }
      ],
      agendaDocs: [
        {
          id: 'yq0y5lji23oj7tho92g',
          agendaItemId: null,
          fileName: 'admin.pdf',
          fileUrl: 'admin.pdf',
          isDeleted: false
        },
        {
          id: '48nyhvsrpijj7thoe54',
          agendaItemId: null,
          fileName: '1_admin.pdf',
          fileUrl: '1_admin.pdf',
          isDeleted: false
        },
        {
          id: '7499dd0imx4j7tholr4',
          agendaItemId: null,
          fileName: 'minutes_last_meeting.pdf',
          fileUrl: 'minutes_last_meeting.pdf',
          isDeleted: false
        },
        {
          id: 'jbw0is69w99j7thosw0',
          agendaItemId: null,
          fileName: '2_minutes_last_meeting.pdf',
          fileUrl: '2_minutes_last_meeting.pdf',
          isDeleted: false
        },
        {
          id: '3eibabp23s5j7thoyhl',
          agendaItemId: null,
          fileName: '5_1_switzerland_austria_italy.pdf',
          fileUrl: '5_1_switzerland_austria_italy.pdf',
          isDeleted: false
        },
        {
          id: 'j02ubxrc9cj7thp3ko',
          agendaItemId: null,
          fileName: 'switzerland_austria_italy.pdf',
          fileUrl: 'switzerland_austria_italy.pdf',
          isDeleted: false
        },
        {
          id: '9ys59d6nocj7thp7q9',
          agendaItemId: null,
          fileName: '3.pdf',
          fileUrl: '3.pdf',
          isDeleted: false
        },
        {
          id: 'mags7mwc4fj7thpcax',
          agendaItemId: null,
          fileName: 'usa.pdf',
          fileUrl: 'usa.pdf',
          isDeleted: false
        },
        {
          id: 'ak5e1c4uhm9j7thpjvc',
          agendaItemId: null,
          fileName: 'poland.pdf',
          fileUrl: 'poland.pdf',
          isDeleted: false
        },
        {
          id: 'v9ecowbj7yqj7thpox5',
          agendaItemId: null,
          fileName: 'adminupdate.pdf',
          fileUrl: 'adminupdate.pdf',
          isDeleted: false
        },
        {
          id: '4cp7m9bwi7dj7thptu2',
          agendaItemId: null,
          fileName: 'adminupdate.pdf.jpg',
          fileUrl: 'adminupdate.pdf.jpg',
          isDeleted: false
        }
      ]
    },
    app: {
      isFetching: false
    },
    ui: {
      navigation: [
        {
          id: 'details',
          name: 'Details',
          isActive: false,
          url: '/details'
        },
        {
          id: 'agenda',
          name: 'Agenda',
          isActive: true,
          url: '/agenda'
        }
      ],
      document: {
        isVisible: true
      },
      agendaOptions: [
        {
          id: 'separator0',
          type: 'separator',
          name: 'Separator',
          isActive: false,
          src: 'separator'
        },
        {
          id: 'iconDownload',
          type: 'icon',
          name: 'Download',
          isActive: false,
          src: 'iconDownload'
        },
        {
          id: 'iconReload',
          type: 'icon',
          name: 'Reload',
          isActive: false,
          src: 'iconReload'
        },
        {
          id: 'separator1',
          type: 'separator',
          name: 'Separator',
          isActive: false,
          src: 'separator'
        },
        {
          id: 'iconSend',
          type: 'icon',
          name: 'Send by Email',
          isActive: true,
          src: 'iconSend'
        },
        {
          id: 'iconAddAgendaItem',
          type: 'icon',
          name: 'Add Item to Agenda',
          isActive: true,
          src: 'iconAddAgendaItem'
        },
        {
          id: 'iconAddDoc',
          type: 'icon',
          name: 'Add document to Item Agenda',
          isActive: true,
          src: 'iconAddDoc'
        }
      ]
    }
  }
}

/**
   * Add documents to their specific agenda items, searching by name or order.
   *
   * How does it work:
   * If a document.fileUrl is included in agenda.name, associate document to agenda.
   * Else if document.fileUrl start with agenda.order, associate document to agenda.
   *
   * Requirements:
   * document.fileUrl must be:
   * - lowercase
   * - contain only alphanumeric characters
   * - contain no white spaces using (low dashes used instead)
   * Example of correct document.fileUrl:
   * - 5_1_switzerland_austria_italy.pdf
   * - switzerland_austria_italy.pdf
 * @param {object} state
 * @param {object} action
 */
const addDocumentsToAgendaItems = (state, action) => {
  deepFreeze(state)
  const agendas = _.cloneDeep(state.agenda.data.agendaItems)
  const docs = _.cloneDeep(state.agenda.data.agendaDocs)

  agendas.forEach(agenda => {
    // normalize agenda.name for search
    let nameToMatch = agenda.name
      .trim().toLowerCase()                   // trim and lowercase
      .split('.')[0]                          // exclude file extension
      .replace(/[^A-Z\d\s]/gi, '')            // remove any non alphanumeric characters
      .replace(/\s+/g, ' ').replace(' ', '_') // replace white spaces with low dashes

    // search if agenda.name is included in document.fileUrl
    const docsNameMatches = docs.filter(doc => doc.fileUrl.includes(nameToMatch))
    const hasExactNameMatch = docsNameMatches.length > 0
    if (hasExactNameMatch) {
      docsNameMatches.forEach(docMatch => {
        docs.find(doc => doc.id === docMatch.id).agendaItemId = agenda.id
      })
    } else {
      // search if agenda.order is included at the beginning of document.fileName
      const orderStrToMatch = agenda.order.toString().replace('.', '_')
      const docsOrderMatches = docs.filter((doc) => doc.fileUrl.startsWith(orderStrToMatch))
      docsOrderMatches.forEach(docMatch => {
        docs.find(doc => doc.id === docMatch.id).agendaItemId = agenda.id
      })
    }
  })

  return dotProp.set(state, 'agenda.data.agendaDocs', docs)
}

/**
 * Check whatever agenda items have documents allocated.
 * If documents are allocated to an agenda item, set agenda item hasDocs to true.
 * @param {object} state
 */
const setAgendaItemsHasDocs = (state) => {
  deepFreeze(state)
  const agendas = _.cloneDeep(state.agenda.data.agendaItems)
  const docs = _.cloneDeep(state.agenda.data.agendaDocs)

  agendas.forEach(agendaItem => {
    agendaItem.hasDocs = docs.some(doc => doc.agendaItemId === agendaItem.id)
  })
  return dotProp.set(state, 'agenda.data.agendaItems', agendas)
}

/**
 * Get the highest order present in agenda items.
 * @param {array} agendas
 */
const getHighestOrder = (agendas) => agendas.sort((a, b) => a.order - b.order).reverse()[0].order

/**
 * Add an agenda item to the agenda items list.
 * @param {object} state
 * @param {object} action
 */
const addItemToAgenda = (state, action) => {
  deepFreeze(state)
  const agendas = _.cloneDeep(state.agenda.data.agendaItems)

  // identify from user input agenda item order name
  const inputValue = action.payload.trim()
  const parts = inputValue.split(' ')
  const containOrder = parts.length > 0 && !isNaN(parts[0])

  // remove the input agenda item
  // (which was used only for displaying an input field in the ui)
  agendas.splice(agendas.findIndex(item => item.isReadOnly === false), 1)

  // create a new agenda item
  const newAgendaItem = {
    id: createGuid(),
    agendaId: 'bs5eah84dvoj7thkw9k',
    order: undefined,
    name: undefined,
    hasDocs: false,
    isReadOnly: true
  }

  // if user input contains an order add user's order
  if (containOrder) {
    const order = Number(parts.shift())
    newAgendaItem.order = order
  } else {
    // otherwise, automatically assign 1+ to the highest order of agenda items
    newAgendaItem.order = getHighestOrder(agendas) + 1
  }
  // set new agenda item name
  const name = parts.join(' ')
  newAgendaItem.name = name

  // add new agenda item
  agendas.push(newAgendaItem)

  // reset all agenda items to be read only
  agendas.forEach(item => { item.isReadOnly = true })

  // add the input agenda item
  const inputAgendaItem = {
    id: createGuid(),
    agendaId: 'bs5eah84dvoj7thkw9k',
    order: getHighestOrder(agendas) + 1,
    name: undefined,
    hasDocs: false,
    isReadOnly: false
  }
  agendas.push(inputAgendaItem)

  // sort agenda items asc
  agendas.sort((a, b) => a.order - b.order)

  return dotProp.set(state, 'agenda.data.agendaItems', agendas)
}

/**
 * The reducer change the application's state in response to actions.
 * Notes: All the application state is stored as a single object.
 * State is modified using Immutable Update Patterns.
 * @param {object} state
 * @param {object} action
 */
function reducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_DOCUMENTS_TO_AGENDA_ITEMS:
      const state1 = addDocumentsToAgendaItems(state)
      const state2 = setAgendaItemsHasDocs(state1)
      return state2

    case types.ADD_ITEM_TO_AGENDA:
      return addItemToAgenda(state, action)

    default:
      return state
  }
}

export default reducer
