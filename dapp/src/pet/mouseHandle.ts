import * as Matter from 'matter-js'

export default function initMouseHandle(
  bodyBody: Matter.Body,
  runner: Matter.Runner
) {
  const handler = document.getElementById('pet3-handler')!
  let dragging = false

  handler.addEventListener('mousedown', (e) => {
    e.preventDefault()
    dragging = true
  })
  document.body.addEventListener('mousemove', (e) => {
    if (dragging) {
      Matter.Body.setPosition(bodyBody, { x: e.x, y: e.y }, true)
    }
  })

  document.body.addEventListener('mouseup', () => {
    dragging = false
    setTimeout(() => {
      Matter.Runner.stop(runner)
    }, 2000)
  })

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
