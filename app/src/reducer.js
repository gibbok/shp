import dotProp from 'dot-prop-immutable'
import * as types from './actionsTypes'
import deepFreeze from 'deep-freeze'
import _ from 'lodash'
import {removeFileExtension, replaceCharacters} from './utility'

const initialState = {
  agenda: {
    data: {
      meetings: [
        {
          id: 0,
          name: 'Monday initial meeting'
        }
      ],
      agendas: [
        {
          id: 0,
          meetingId: 0,
          name: 'Main Agenda'
        }
      ],
      agendaItems: [
        {
          id: 0,
          agendaId: 0,
          order: 1,
          name: 'Admin',
          isReviewed: false
        },
        {
          id: 1,
          agendaId: 0,
          order: 2,
          name: 'Minutes Last Meeting',
          isReviewed: false
        },
        {
          id: 2,
          agendaId: 0,
          order: 3,
          name: 'Perfomance / Key Initiatives',
          isReviewed: false
        },
        {
          id: 3,
          agendaId: 0,
          order: 4,
          name: 'Management Update',
          isReviewed: false
        },
        {
          id: 4,
          agendaId: 0,
          order: 5,
          name: 'Country Managers Outlook',
          isReviewed: false
        },
        {
          id: 5,
          agendaId: 0,
          order: 5.1,
          name: 'Switzerland / Austria / Italy',
          isReviewed: true
        },
        {
          id: 6,
          agendaId: 0,
          order: 5.2,
          name: 'Germany',
          isReviewed: true
        },
        {
          id: 7,
          agendaId: 0,
          order: 5.3,
          name: 'France',
          isReviewed: true
        },
        {
          id: 8,
          agendaId: 0,
          order: 6,
          name: 'Sales Marketing',
          isReviewed: false
        }
      ],
      agendaDocs: [
        {
          id: 0,
          agendaItemId: null,
          fileName: 'admin.pdf',
          fileUrl: 'admin.pdf',
          isDeleted: false
        },
        {
          id: 1,
          agendaItemId: null,
          fileName: '1_admin.pdf',
          fileUrl: '1_admin.pdf',
          isDeleted: false
        },
        {
          id: 2,
          agendaItemId: null,
          fileName: 'minutes_last_meeting.pdf',
          fileUrl: 'minutes_last_meeting.pdf',
          isDeleted: false
        },
        {
          id: 3,
          agendaItemId: null,
          fileName: '2_minutes_last_meeting.pdf',
          fileUrl: '2_minutes_last_meeting.pdf',
          isDeleted: false
        },
        {
          id: 4,
          agendaItemId: null,
          fileName: '5_1_switzerland_austria_italy.pdf',
          fileUrl: '5_1_switzerland_austria_italy.pdf',
          isDeleted: false
        },
        {
          id: 5,
          agendaItemId: null,
          fileName: 'switzerland_austria_italy.pdf',
          fileUrl: 'switzerland_austria_italy.pdf',
          isDeleted: false
        },
        {
          id: 6,
          agendaItemId: null,
          fileName: '3.pdf',
          fileUrl: '3.pdf',
          isDeleted: false
        },
        {
          id: 7,
          agendaItemId: null,
          fileName: 'usa.pdf',
          fileUrl: 'usa.pdf',
          isDeleted: false
        },
        {
          id: 8,
          agendaItemId: null,
          fileName: 'poland.pdf',
          fileUrl: 'poland.pdf',
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
          id: 0,
          name: 'Details',
          isActive: false,
          url: '/details'
        },
        {
          id: 1,
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
          id: 0,
          name: 'Download',
          isActive: false,
          src: ''
        },
        {
          id: 1,
          name: 'Progress',
          isActive: false,
          src: ''
        },
        {
          id: 2,
          name: 'Send by Email',
          isActive: true,
          src: ''
        },
        {
          id: 3,
          name: 'Add Item to Agenda',
          isActive: true,
          src: ''
        },
        {
          id: 4,
          name: 'Add document to Item Agenda',
          isActive: true,
          src: ''
        }
      ]
    }
  }
}

const addDocumentToAgendaItem = (state, action) => {
  /*
   * Add a document to a specific agenda item based on its order reference match.
   */
  deepFreeze(state)
  const docId = action.payload
  const agendas = _.cloneDeep(state.agenda.data.agendaItems)
  const docs = _.cloneDeep(state.agenda.data.agendaDocs)

  agendas.forEach(agenda => {
    // exact name match
    let nameToMatch = agenda.name.trim().toLowerCase()
    nameToMatch = replaceCharacters(nameToMatch, ' / ', '_')
    nameToMatch = replaceCharacters(nameToMatch, ' ', '_')

    const docsWithMatches = docs.filter(doc => doc.fileName.includes(nameToMatch))
    const hasNameMatch = docsWithMatches.length > 0
    if (hasNameMatch) {
      docsWithMatches.forEach(docWithMatch => {
        let doc = docs.find(doc => doc.id === docWithMatch.id)
        doc.agendaItemId = agenda.id
      })
    } else {
      const orderStrMatch = agenda.order.toString().replace('.', '_')
      const docsWithMatchesOrder = docs.filter((doc) => doc.fileName.startsWith(orderStrMatch))
      docsWithMatchesOrder.forEach(docWithMatchesOrder => {
        let doc = docs.find(doc => doc.id === docWithMatchesOrder.id)
        doc.agendaItemId = agenda.id
      })
    }
  })
  return dotProp.set(state, 'agenda.data.agendaDocs', docs)
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_DOCUMENT_TO_AGENDA_ITEM:
      return addDocumentToAgendaItem(state, action)

    default:
      return state
  }
}
export default reducer
