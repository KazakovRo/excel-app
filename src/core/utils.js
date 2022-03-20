export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    // swap the variables so that there is no error if we select the range from right to left
    // eslint-disable-next-line no-extra-semi
    ;[end, start] = [start, end]
  }

  return new Array(end - start + 1).fill('').map((_, index) => start + index)
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }

  localStorage.setItem(key, JSON.stringify(data))
}
