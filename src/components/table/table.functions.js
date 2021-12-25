import { range } from '@core/utils'

// export function shouldResize(e) {
//   return e.target.dataset.resize
// }

export function isCell(tableCell) {
  return tableCell === 'cell'
}

export function multiSelect($targetCell, $currentCell) {
  const targetCell = $targetCell.id(true)
  const currentCell = $currentCell.id(true)

  const cols = range(currentCell.col, targetCell.col)
  const rows = range(currentCell.row, targetCell.row)

  // range of cells group
  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])

  // group cells
  // const targetCell = $target.id(true)
  // const currentCell = this.selection.current.id(true)

  // const cols = range(currentCell.col, targetCell.col)
  // const rows = range(currentCell.row, targetCell.row)

  // // range of cells group
  // const collsAndRowsGroup = cols.reduce((acc, col) => {
  //   rows.forEach(row => acc.push(`${row}:${col}`))
  //   return acc
  // }, [])

  // const $cells = collsAndRowsGroup.map(id => this.$root.find(`[data-id="${id}"]`))
  // this.selection.selectGroup($cells)
}

export function nextSelector(key, { col, row }) {
  const MIN_VALUE = 0

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break

    case 'Tab':
    case 'ArrowRight':
      col++
      break

    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1 // col--
      break
    case 'ArrowUp':
      // if row < 0 then our cell equal min_value --> another way is row - 1 its our new cell
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1 // row--
      break
  }

  return `[data-id="${row}:${col}"]`
}
