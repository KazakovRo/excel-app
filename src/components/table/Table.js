import { ExcelComponent } from '@core/ExcelComponent'
import { library } from '@core/dom.js'
import { createTable } from './table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      // console.log('Start resizing', e.target.dataset.resize)
      const $targetResize = library(e.target)
      // add $el before closest and use native closest method
      const $parentCell = $targetResize.closest('[data-type="resizable"]')
      const coords = $parentCell.getCoords()

      const tableItem = e.target.dataset.resize

      document.onmousemove = e => {
        const isColumn = tableItem === 'col'

        const delta = isColumn ? e.pageX - coords.right : e.pageY - coords.bottom
        const value = isColumn ? coords.width + delta : coords.height + delta
        const styleSize = isColumn ? 'width' : 'height'

        $parentCell.$el.style[styleSize] = value + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }

  toHTML() {
    return createTable(20)
  }
}
