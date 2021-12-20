import { library } from '@core/dom.js'

export function resizeHandler($root, e, tableItem) {
  // console.log('Start resizing', e.target.dataset.resize)
  const $targetResize = library(e.target)
  // add $el before closest and use native closest method
  const $parentCell = $targetResize.closest('[data-type="resizable"]')
  const coords = $parentCell.getCoords()
  // .data it's getter function
  const dataCells = $root.findAll(`[data-col="${$parentCell.data.col}"]`)
  const isColumn = tableItem === 'col'
  const sideProp = isColumn ? 'bottom' : 'right'
  const styleSize = isColumn ? 'width' : 'height'
  let delta
  let value

  // show blue line (resizer)
  $targetResize.css({
    opacity: 1,
    [sideProp]: '-5000px'
  })

  document.onmousemove = e => {
    // delta = isColumn ? e.pageX - coords.right : e.pageY - coords.bottom
    // value = isColumn ? coords.width + delta : coords.height + delta

    // $targetResize.css({ [sideProp]: -delta + 'px' })

    if (isColumn) {
      delta = e.pageX - coords.right
      value = coords.width + delta
      $targetResize.css({ right: -delta + 'px' })
    } else {
      delta = e.pageY - coords.bottom
      value = coords.height + delta
      $targetResize.css({ bottom: -delta + 'px' })
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null

    $parentCell.css({ [styleSize]: value + 'px' }) // $parentCell.$el.style[styleSize] = value + 'px'
    dataCells.forEach(el => (el.style.width = value + 'px')) // dataCells.forEach(el => (el.style.width = value + 'px'))

    // hide blue line (resizer)
    $targetResize.css({
      opacity: 0,
      [sideProp]: '0'
    })
  }
}
