class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }

    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  closest(selector) {
    console.log('new closest method')
    return library(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    console.log('new dataset method')
    return this.$el.dataset
  }

  find(selector) {
    return library(this.$el.querySelector(selector))
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  addClass(className) {
    this.$el.classList.add(className)
    return this
  }

  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':')

      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }

    return this.data.id
  }

  focus() {
    this.$el.focus()
    return this
  }

  text(text) {
    if (typeof text === 'string') {
      this.$el.textContent = text
      return this
    }

    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim()
    }

    return this.$el.textContent.trim()
  }

  css(changeStyles = {}) {
    console.log('css method')
    Object.keys(changeStyles).forEach(key => {
      this.$el.style[key] = changeStyles[key]
    })
  }
}

export function library(selector) {
  return new Dom(selector)
}

library.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)

  if (classes) {
    el.classList.add(classes)
  }

  return library(el)
}
