import { ExcelComponent } from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return `
      <div class="row">
        <div class="row-info"></div>

        <div class="row-data">
          <div class="column">A</div>
          <div class="column">B</div>
          <div class="column">C</div>
        </div>
      </div>

      <div class="row">
        <div class="row-info">1</div>

        <div class="row-data">
          <div class="cell selected" contenteditable>123213</div>
          <div class="cell" contenteditable>123132132123</div>
          <div class="cell" contenteditable>222</div>
        </div>
      </div>

      <div class="row">
        <div class="row-info">2</div>

        <div class="row-data">
          <div class="cell">123213</div>
          <div class="cell">123132132123</div>
          <div class="cell">222</div>
        </div>
      </div>
    `
  }
}