class Dom {
  constructor() {}
}

export function library() {
  return new Dom()
}

library.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)

  if (classes) {
    el.classList.add(classes)
  }

  return el
}
