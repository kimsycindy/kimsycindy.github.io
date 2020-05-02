import { ActionTypes, ActionNames } from './actions'

export const initialState = {
  email: '',
  name: '',
  message: '',
  submitting: false,
  status: {
    ok: false,
    msg: '',
  },
}

type State = typeof initialState

export const reducer: React.Reducer<State, ActionTypes> = (state, action) => {
  switch (action.type) {
    case ActionNames.VALUE_CHANGED: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }

    case ActionNames.SUBMIT_START: {
      const { submitting } = action.payload
      return { ...state, submitting }
    }

    case ActionNames.SUBMIT_STOP: {
      const { submitting, status } = action.payload
      return { ...state, submitting, status }
    }

    default:
      throw new Error()
  }
}
