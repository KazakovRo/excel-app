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
