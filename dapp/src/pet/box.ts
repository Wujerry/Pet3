import * as Matter from 'matter-js'
import MatterUitl from './util'

export default function generateBox(
  engine: Matter.Engine,
  world: Matter.World,
  bodyHead: Matter.Body
) {
  let collisionTimes = 0
  const WinCounts = 3
  const Composite = Matter.Composite
  const Bodies = Matter.Bodies
  const Events = Matter.Events
  const boxWidth = 80
  const boxHeight = 80

  const [x, y] = MatterUitl.getRandomPosition(boxWidth, boxHeight)
  // init lucky box
  const bodyBox = Bodies.rectangle(x, y, boxWidth, boxHeight, {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
    },
  })
  Composite.add(world, [bodyBox])
  Events.on(engine, 'collisionStart', onCollisionStart)

  function onCollisionStart(e: Matter.IEventCollision<Matter.Engine>) {
    const pairs = e.pairs
    if (
      pairs.findIndex(
        (pair) =>
          (pair.bodyA === bodyBox && pair.bodyB === bodyHead) ||
          (pair.bodyB === bodyBox && pair.bodyA === bodyHead)
      ) !== -1
    ) {
      collisionTimes++
      if (collisionTimes > WinCounts) {
        // Composite.remove(world, bodyBox)
        bodyBox.render.fillStyle = '#c12c1f'
        collisionTimes = 0
        Events.off(engine, 'collisionStart', onCollisionStart)
        if (chrome) {
          chrome.storage.local.set({ score: MatterUitl.getRandomInt(1, 10) })
        }
        setTimeout(() => {
          Composite.remove(world, bodyBox)
        }, 2000)

        // regenerate box after 200s
        setTimeout(() => {
          bodyBox.render.fillStyle = 'transparent'
          const [x, y] = MatterUitl.getRandomPosition(boxWidth, boxHeight)
          bodyBox.position.x = x
          bodyBox.position.y = y
          Composite.add(world, [bodyBox])
          Events.on(engine, 'collisionStart', onCollisionStart)
        }, 200000)
      }
    }
  }
}
