import dotProp from 'dot-prop-immutable'

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
          orderRef: 1,
          agendaItemId: null,
          fileName: 'admin.pdf',
          fileUrl: 'admin.pdf',
          isDeleted: false
        },
        {
          id: 1,
          orderRef: 1,
          agendaItemId: null,
          fileName: '1_admin.pdf',
          fileUrl: '1_admin.pdf',
          isDeleted: false
        },
        {
          id: 2,
          orderRef: 2,
          agendaItemId: null,
          fileName: 'minutes_last_meeting.pdf',
          fileUrl: 'minutes_last_meeting.pdf',
          isDeleted: false
        },
        {
          id: 3,
          orderRef: 2,
          agendaItemId: null,
          fileName: '2_minutes_last_meeting.pdf',
          fileUrl: '2_minutes_last_meeting.pdf',
          isDeleted: false
        },
        {
          id: 4,
          orderRef: 5.1,
          agendaItemId: null,
          fileName: '5_1_switzerland_austria_italy.pdf',
          fileUrl: '5_1_switzerland_austria_italy.pdf',
          isDeleted: false
        },
        {
          id: 5,
          orderRef: 5.1,
          agendaItemId: null,
          fileName: 'switzerland_austria_italy.pdf',
          fileUrl: 'switzerland_austria_italy.pdf',
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

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_AGENDA_ITEM':
      return state

    case 'ADD_AGENDA_ITEM__DOCUMENT':
      return state

    default:
      return state
  }
}
export default reducer
