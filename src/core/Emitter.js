export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // notify listeners if any
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }

    this.listeners[event].forEach(listener => {
      listener(...args)
    })

    return true
  }

  // subscribe to notifications
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)

    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()

// const unsub = emitter.subscribe('roman', data => console.log('subscribe', data))

// emitter.emit('roman', 42)

// setTimeout(() => {
//   emitter.emit('roman', 2)
// }, 2000)

// setTimeout(() => {
//   unsub()
// }, 3000)

// setTimeout(() => {
//   emitter.emit('roman', 2)
// }, 4000)
