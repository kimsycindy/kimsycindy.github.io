export enum ActionNames {
  VALUE_CHANGED = 'value_changed',
  SUBMIT_START = 'submit_start',
  SUBMIT_STOP = 'submit_stop',
}

export type ActionTypes =
  | {
      type: ActionNames.VALUE_CHANGED
      payload: {
        name: string
        value: string
      }
    }
  | {
      type: ActionNames.SUBMIT_START
      payload: {
        submitting: boolean
      }
    }
  | {
      type: ActionNames.SUBMIT_STOP
      payload: {
        submitting: boolean
        status: {
          ok: boolean
          msg: string
        }
      }
    }

export const valueChanged = (name: string, value: string) => ({
  // Why is ActionNames.VALUE_CHANGED inferred as ActionNames w/o the cast???
  type: ActionNames.VALUE_CHANGED as ActionNames.VALUE_CHANGED,
  payload: {
    name,
    value,
  },
})

export const submitStart = () => ({
  type: ActionNames.SUBMIT_START as ActionNames.SUBMIT_START,
  payload: {
    submitting: true,
  },
})

export const submitStop = (ok: boolean, msg: string) => ({
  type: ActionNames.SUBMIT_STOP as ActionNames.SUBMIT_STOP,
  payload: {
    submitting: false,
    status: {
      ok,
      msg,
    },
  },
})
