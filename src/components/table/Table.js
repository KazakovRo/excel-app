import { ExcelComponent } from '@core/ExcelComponent'
import { library } from '@core/dom'
import { createTable } from './table.template'
import { resizeHandler } from './table.resize'
import { TableSelection } from './TableSelection'
import { isCell, multiSelect } from './table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  onMousedown(e) {
    const tableItem = e.target.dataset.resize
    const tableCell = e.target.dataset.type

    // shouldResize(e) --> equals -->  tableItem
    if (tableItem) {
      resizeHandler(this.$root, e, tableItem)
    } else if (isCell(tableCell)) {
      const $target = library(e.target)

      // blue select cell
      if (e.shiftKey) {
        // group cells
        const $cells = multiSelect($target, this.selection.current).map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        // one cell
        this.selection.select($target)
      }
    }
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  toHTML() {
    return createTable(20)
  }
}
