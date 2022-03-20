import { TABLE_RESIZE } from './types'

export function rootReducer(state, action) {
  let prevState

  switch (action.type) {
    case TABLE_RESIZE:
      prevState = state.colState || {}
      prevState[action.columnResizeData.id] = action.columnResizeData.value
      return { ...state, colState: prevState } // id of colimn + value

    default:
      return state
  }
}
