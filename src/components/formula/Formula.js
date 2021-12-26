import { ExcelComponent } from '@core/ExcelComponent'
import { library } from '../../core/dom'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options
    })
  }

  init() {
    super.init()

    this.$formula = this.$root.find('#formula')

    this.$on('table:select', $cell => {
      this.$formula.text($cell.text())
    })
  }

  onInput(e) {
    this.$emit('formula:input', library(e.target).text())
  }

  onClick() {
    console.log('click method')
  }

  onKeydown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.$emit('formula:done')
    }
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `
  }
}
