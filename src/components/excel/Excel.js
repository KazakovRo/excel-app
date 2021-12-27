import { library } from '@core/dom'
import { Emitter } from '@core/Emitter'

export class Excel {
  constructor(selector, options) {
    this.$el = library(selector)
    this.components = options.components || []
    this.emitter = new Emitter()
  }

  getRoot() {
    const $root = library.create('div', 'excel')

    const componentOptions = {
      emitter: this.emitter
    }

    this.components = this.components.map(Component => {
      const $el = library.create('div', Component.className)

      const component = new Component($el, componentOptions)

      // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }

      $el.html(component.toHTML()) // $el.innerHTML = component.toHTML()
      $root.append($el)
      return component
    })

    return $root
  }

  destroy() {
    this.components.forEach(component => component.destroy())
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
