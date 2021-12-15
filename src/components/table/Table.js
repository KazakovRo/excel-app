import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
      listeners: ['mousedown']
    })
  }

  // onClick() {
  //   console.log('click')
  // }

  onMousedown(e) {
    // console.log('mouse down', e.target)
    if (e.target.dataset.resize) {
      console.log('Start resizing', e.target.dataset.resize)
    }
    // console.log(e.target.getAttribute('data-resize'))
  }

  // onMousemove() {
  //   console.log('mouse mowe')
  // }

  // onMouseup() {
  //   console.log('mouse up')
  // }

  toHTML() {
    return createTable(20)
  }
}
