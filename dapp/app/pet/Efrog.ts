import MatterUitl from './util'
import * as Matter from 'matter-js'

export default class Efrog {
  world: Matter.World
  util: MatterUitl
  bodyBody?: Matter.Body
  bodyHead?: Matter.Body

  constructor(world: Matter.World, width = window.innerWidth, height = window.innerHeight) {
    this.world = world
    this.util = new MatterUitl(width, height)
  }

  init() {
    this.bodyBody = this.createBody()
    this.bodyHead = this.createHead()
  }

  createBody(initConstraint = true) {
    const width = 118
    const height = 75
    const body = Matter.Bodies.rectangle(
      this.util.getRandomPositionX(width),
      this.util.getRandomPositionY(height),
      width,
      height,
      {
        render: {
          sprite: {
            texture: './efrog-body.png',
          },
        },
      },
    )
    this.addToWorld([body])
    return body
  }

  createHead(initConstraint = true) {
    const width = 30
    const height = 30
    const [x, y] = this.util.getRandomPosition()
    const body = Matter.Bodies.rectangle(x, y, width, height, {
      render: {
        sprite: {
          texture: './efrog-head.png',
        },
      },
    })
    if (initConstraint) {
      const constraint = Matter.Constraint.create({
        bodyA: this.bodyBody,
        pointA: { x: 0, y: -30 },
        bodyB: body,
        pointB: { x: 0, y: 0 },
        damping: 1,
        stiffness: 0.01,
        length: 50,
        render: {
          visible: false,
        },
      })
      this.addToWorld([constraint])
    }
    this.addToWorld([body])
    return body
  }

  addToWorld(bodys: any[]) {
    Matter.Composite.add(this.world, bodys)
  }
}
