import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
      ...options
    })
  }

  onInput(e) {
    // console.log(this.$root)
    // console.log('Formula: onInput', e.target.textContent.trim())
    const text = e.target.textContent.trim()
    this.$emit('formula:input', text)
  }

  onClick() {
    console.log('click method')
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
