import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'
import { resizeHandler } from './table.resize'
import { TableSelection } from './TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  onMousedown(e) {
    const tableItem = e.target.dataset.resize

    // shouldResize(e) --> equals -->  tableItem
    if (tableItem) {
      resizeHandler(this.$root, e, tableItem)
    }
  }

  init() {
    super.init()

    this.selection = new TableSelection()
  }

  toHTML() {
    return createTable(20)
  }
}
