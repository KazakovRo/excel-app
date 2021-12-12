const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(content) {
  return `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function allLetters(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const ArrayOfLetetrs = new Array(colsCount).fill('').map(allLetters) // new Array(colsCount).fill('').map((elem, index) => String.fromCharCode(CODES.A + index))
  const cols = ArrayOfLetetrs.map(createCol).join('') // ArrayOfLetetrs.map(elem => createCol(elem)).join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(createCell).join('')

    rows.push(createRow(cells))
  }

  return rows.join('')
}

// {
/* <div class="row">
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
</div> */
// }
