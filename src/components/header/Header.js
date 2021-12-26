import { ExcelComponent } from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
  }

  toHTML() {
    return `
      <input type="text" class="input" value="New table" />

      <div class="buttons-container">
        <div class="button">
          <span class="material-icons"> logout </span>
        </div>
        <div class="button">
          <span class="material-icons"> delete_forever </span>
        </div>
      </div>
    `
  }
}
