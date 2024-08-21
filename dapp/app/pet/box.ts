import * as Matter from 'matter-js'
import MatterUitl from './util'

export default function generateBox(
  engine: Matter.Engine,
  world: Matter.World,
  bodyHead: Matter.Body,
  onBoxClick: () => void,
) {
  let collisionTimes = 0
  const WinCounts = 1
  const Composite = Matter.Composite
  const Bodies = Matter.Bodies
  const Events = Matter.Events
  const boxWidth = 48
  const boxHeight = 48

  const util = new MatterUitl()
  const [x, y] = util.getRandomPosition(boxWidth, boxHeight)
  console.log('box position', x, y)
  // init lucky box
  const bodyBox = Bodies.rectangle(x, y, boxWidth, boxHeight, {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#bdbdbd',
      lineWidth: 1,
      // visible: false,
    },
  })
  Composite.add(world, [bodyBox])

  Events.on(engine, 'collisionStart', onCollisionStart)

  function onCollisionStart(e: Matter.IEventCollision<Matter.Engine>) {
    const pairs = e.pairs
    if (
      pairs.findIndex(
        (pair) =>
          (pair.bodyA === bodyBox && pair.bodyB === bodyHead) || (pair.bodyB === bodyBox && pair.bodyA === bodyHead),
      ) !== -1
    ) {
      collisionTimes++
      console.log('collisionTimes', collisionTimes)
      if (collisionTimes > WinCounts) {
        // show lucky box
        const luckyBoxEl = document.getElementById('pet3-lucky-box')
        if (!luckyBoxEl) return
        luckyBoxEl.style.display = 'block'
        luckyBoxEl.style.transform = `translate(${bodyBox.position.x - 75}px, ${bodyBox.position.y - 75}px)`
        luckyBoxEl.addEventListener('click', onBoxClicked)

        // remove box body
        Composite.remove(world, bodyBox)
        collisionTimes = 0
        Events.off(engine, 'collisionStart', onCollisionStart)
        // if (chrome && chrome.storage) {
        //   chrome.storage.local.set({ score: util.getRandomInt(1, 10) })
        // }
      }
    }
  }

  async function onBoxClicked() {
    console.log('box click')
    // hide lucky box
    const luckyBoxEl = document.getElementById('pet3-lucky-box')!
    if (!luckyBoxEl) return
    luckyBoxEl.style.display = 'none'
    luckyBoxEl.removeEventListener('click', onBoxClicked)
    onBoxClick()
    // regenerate box after 200s
    const [x, y] = util.getRandomPosition(boxWidth, boxHeight)
    Matter.Body.setPosition(bodyBox, { x, y }, true)
    Composite.add(world, [bodyBox])
    Events.on(engine, 'collisionStart', onCollisionStart)
  }
}
