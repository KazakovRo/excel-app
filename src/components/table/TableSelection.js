export class TableSelection {
  constructor() {
    this.group = []
  }

  static className = 'selected'

  // $el instanceof DOM === true
  select($el) {
    this.clear()
    this.group.push($el)
    $el.addClass(TableSelection.className)
  }

  selectGroup() {}

  clear() {
    this.group.forEach(elem => elem.removeClass(TableSelection.className))
    this.group = []
  }
}
