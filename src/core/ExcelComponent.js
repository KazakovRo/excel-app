import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unSubscribers = []

    this.prepare()
  }

  // configuring the component before initialization
  prepare() {}

  // initialize the component and add DOM listeners
  init() {
    this.initDOMListeners()
  }

  // notify listeners about events
  $emit(event, ...args) {
    const unSubscribe = this.emitter.emit(event, ...args)
    this.unSubscribers.push(unSubscribe)
  }

  // subscribe to the event event
  $on(event, fn) {
    this.emitter.subscribe(event, fn)
  }

  // removing the component and cleaning up the listeners
  destroy() {
    this.removeDOMListeners()
    this.unSubscribers.forEach(unSubscribe => unSubscribe())
  }

  // return component template
  toHTML() {
    return ''
  }
}
