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

    this.$on('table:input', $cell => {
      this.$formula.text($cell.text())
    })

    // реагируем на изменения стейта
    this.$subscribe(state => {
      console.log('formulaState', state)
    })
  }

  onInput(e) {
    this.$emit('formula:input', library(e.target).text())
  }

  onClick() {
    console.log('click method')
  }

  onKeydown(e) {
    const keys = ['Enter', 'tab']
    if (keys.includes(e.key)) {
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
