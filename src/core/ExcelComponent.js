import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.store = options.store
    this.emitter = options.emitter
    this.unSubscribers = []
    this.storeSub = null

    this.prepare()
  }

  // configuring the component before initialization
  prepare() {}

  // return component template
  toHTML() {
    return ''
  }

  // notify listeners about events
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // $emit(event, ...args) {
  //   const unSubscribe = this.emitter.emit(event, ...args)
  //   this.unSubscribers.push(unSubscribe)
  // }

  // subscribe to the event event
  $on(event, fn) {
    const unSubscribe = this.emitter.subscribe(event, fn)
    this.unSubscribers.push(unSubscribe)
  }
  // $on(event, fn) {
  //   this.emitter.subscribe(event, fn)
  // }

  // for redux
  $dispatch(action) {
    this.store.dispatchEvent(action)
  }

  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn)
    // sub.unsubscribe()
  }

  // initialize the component and add DOM listeners
  init() {
    this.initDOMListeners()
  }

  // removing the component and cleaning up the listeners
  destroy() {
    this.removeDOMListeners()
    this.unSubscribers.forEach(unSubscribe => unSubscribe())
    this.storeSub.unsubscribe()
  }
}
