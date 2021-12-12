import { library } from '../../core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = library(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = library.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $el = library.create('div', Component.className)

      const component = new Component($el)
      // DEBUG
      if (component.name) {
        window['c' + component.name] = component
      }

      $el.html(component.toHTML()) // $el.innerHTML = component.toHTML()
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
