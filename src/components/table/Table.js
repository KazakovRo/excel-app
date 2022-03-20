import { ExcelComponent } from '@core/ExcelComponent'
import { library } from '@core/dom'
import { createTable } from './table.template'
import { resizeHandler } from './table.resize'
import { TableSelection } from './TableSelection'
import { isCell, multiSelect, nextSelector } from './table.functions'
// import * as actions from '../../redux/actions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  init() {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')
    this.selectCell($cell)
    // this.selection.select($cell)
    // this.$emit('table:select', $cell)

    this.$on('formula:input', text => {
      this.selection.current.text(text)
    })

    this.$on('formula:done', () => {
      this.selection.current.focus()
    })

    // реагируем на изменения стейта
    // this.$subscribe(state => {
    //   console.log('tableState', state)
    // })
  }

  selectCell($cell) {
    this.selection.select($cell)
    this.$emit('table:select', $cell)
    // this.$dispatch({ type: 'TEST' })
  }

  async resizeTable(e, tableItem) {
    try {
      const columnResizeData = await resizeHandler(this.$root, e, tableItem)
      // next 2 strings is the same
      this.$dispatch({ type: 'TABLE_RESIZE', columnResizeData })
      // don't work
      // this.$dispatch(actions.tableResizeAction(columnResizeData))
      // console.log('columnResizeData: ', columnResizeData)
    } catch (e) {
      console.warn('Resize error', e.message)
    }
  }

  onMousedown(e) {
    const tableItem = e.target.dataset.resize
    const tableCell = e.target.dataset.type

    // shouldResize(e) --> equals -->  tableItem
    if (tableItem) {
      this.resizeTable(e, tableItem)
    } else if (isCell(tableCell)) {
      const $target = library(e.target)

      // blue select cell
      if (e.shiftKey) {
        // group cells
        const $cells = multiSelect($target, this.selection.current).map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        // one cell
        this.selectCell($target)
      }
    }
  }

  onKeydown(e) {
    const keys = ['Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp']
    const { key } = e

    if (keys.includes(key) && !e.shiftKey) {
      e.preventDefault()

      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, id))
      this.selectCell($next)
      // this.selection.select($next)
      // this.$emit('table:select', $next)
    }
  }

  prepare() {
    this.selection = new TableSelection()
  }

  onInput(e) {
    this.$emit('table:input', library(e.target))
  }

  toHTML() {
    return createTable(20)
  }
}
