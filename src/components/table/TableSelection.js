export class TableSelection {
  constructor() {
    this.group = []
    this.current = null
  }

  static className = 'selected'

  // $el instanceof DOM === true
  select($el) {
    this.clear()
    this.group.push($el)
    this.current = $el
    $el.focus().addClass(TableSelection.className)
  }

  selectGroup($group) {
    this.clear()
    this.group = $group
    this.group.forEach(elem => elem.addClass(TableSelection.className))
  }

  clear() {
    this.group.forEach(elem => elem.removeClass(TableSelection.className))
    this.group = []
  }
}
