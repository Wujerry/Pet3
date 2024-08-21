import * as Matter from 'matter-js'

export default function initMouseHandle(bodyBody: Matter.Body) {
  const handler = document.getElementById('pet3-handler')!
  let dragging = false

  handler.addEventListener('mousedown', (e) => {
    e.preventDefault()
    dragging = true
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  })

  function onMouseMove(e: MouseEvent) {
    if (dragging) {
      Matter.Body.setPosition(bodyBody, { x: e.x, y: e.y }, true)
    }
  }

  function onMouseUp() {
    if (dragging) {
      dragging = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }

  // This function is used to update the position of the pet3-handler element
  function step() {
    handler.style.setProperty('--pet3-rotate', bodyBody.angle + 'rad')

    handler.style.setProperty(
      '--pet3-handler-x',
      bodyBody.position.x - 30 + 'px'
    )
    handler.style.setProperty(
      '--pet3-handler-y',
      bodyBody.position.y - 40 + 'px'
    )
    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)
}
