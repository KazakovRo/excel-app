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

      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parentCell.$el.style.width = value + 'px'
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
