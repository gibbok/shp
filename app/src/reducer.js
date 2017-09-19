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
          name: 'Admin',
          isReviewed: false
        },
        {
          id: 1,
          agendaId: 0,
          name: 'Minutes Last Meeting',
          isReviewed: false
        },
        {
          id: 2,
          agendaId: 0,
          name: 'Perfomance / Key Initiatives',
          isReviewed: false
        },
        {
          id: 3,
          agendaId: 0,
          name: 'Management Update',
          isReviewed: false
        },
        {
          id: 4,
          agendaId: 0,
          name: 'Country Managers Outlook',
          isReviewed: false
        },
        {
          id: 5,
          agendaId: 0,
          name: 'Switzerland / Austria / Italy',
          isReviewed: true
        },
        {
          id: 6,
          agendaId: 0,
          name: 'Germany',
          isReviewed: true
        },
        {
          id: 7,
          agendaId: 0,
          name: 'France',
          isReviewed: true
        },
        {
          id: 8,
          agendaId: 0,
          name: 'Sales Marketing',
          isReviewed: false
        }
      ],
      agendaDocs: [
        {
          id: 8,
          agendaItemId: 0,
          fileName: 'admin.pdf',
          fileUrl: '1_admin.pdf',
          isDeleted: false
        }
      ]
    },
    app: {
      isFetching: false
    },
    ui: {
      inputValue: ''
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
