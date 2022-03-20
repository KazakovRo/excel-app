import { TABLE_RESIZE } from './types'

export function tableResizeAction(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}
