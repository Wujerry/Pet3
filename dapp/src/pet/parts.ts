import MatterUitl from './util'
import * as Matter from 'matter-js'

export default class PetParts {
  world: Matter.World
  bodyBody: Matter.Body
  bodyHead: Matter.Body
  bodyEyeLeft: Matter.Body
  bodyEyeRight: Matter.Body
  bodyLegLeft: Matter.Body
  bodyLegRight: Matter.Body
  bodyArmLeft: Matter.Body
  bodyArmRight: Matter.Body

  constructor(world: Matter.World) {
    this.world = world
    this.bodyBody = this.createBody()
    this.bodyHead = this.createHead()
    this.bodyEyeLeft = this.createLeftEye()
    this.bodyEyeRight = this.createRightEye()
    this.bodyLegLeft = this.createLeftLeg()
    this.bodyLegRight = this.createRightLeg()
    this.bodyArmLeft = this.createLeftArm()
    this.bodyArmRight = this.createRightArm()
  }

  createBody() {
    const width = 60
    const height = 80
    const body = Matter.Bodies.rectangle(
      MatterUitl.getRandomPositionX(width),
      MatterUitl.getRandomPositionY(height),
      width,
      height
    )
    this.addToWorld([body])
    return body
  }

  createHead() {
    const r = 25
    const [x, y] = MatterUitl.getRandomPosition(r, r)
    const body = Matter.Bodies.circle(x, y, r)
    const constraint = Matter.Constraint.create({
      bodyA: this.bodyBody,
      pointA: { x: 0, y: 30 },
      bodyB: body,
      pointB: { x: 0, y: 0 },
      damping: 1,
      length: 40,
      render: {
        visible: false,
      },
    })
    this.addToWorld([body, constraint])
    return body
  }

  createLeftEye() {
    const r = 5
    const [x, y] = MatterUitl.getRandomPosition(r, r)
    const body = Matter.Bodies.circle(x, y, r)
    const constraintEyeLeft = Matter.Constraint.create({
      bodyA: this.bodyHead,
      pointA: { x: 0, y: 10 },
      bodyB: body,
      pointB: { x: 0, y: 0 },
      damping: 1,
      length: 40,
      render: {
        visible: false,
      },
    })
    this.addToWorld([body, constraintEyeLeft])
    return body
  }

  createRightEye() {
    const r = 5
    const [x, y] = MatterUitl.getRandomPosition(r, r)
    const body = Matter.Bodies.circle(x, y, r)
    const constraintEyeRight = Matter.Constraint.create({
      bodyA: this.bodyHead,
      pointA: { x: 0, y: -10 },
      bodyB: body,
      pointB: { x: 0, y: 0 },
      damping: 1,
      length: 40,
      render: {
        visible: false,
      },
    })
    this.addToWorld([body, constraintEyeRight])
    return body
  }

  createLeftLeg() {
    const width = 20
    const height = 50
    const [x, y] = MatterUitl.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height)
    const constraintLegLeft = Matter.Constraint.create({
      bodyA: this.bodyBody,
      pointA: { x: -20, y: -30 },
      bodyB: body,
      pointB: { x: 0, y: -25 },
      stiffness: 0.01,
      damping: 1,
      length: 40,
      // render: {
      //   visible: false,
      // },
    })
    this.addToWorld([body, constraintLegLeft])
    return body
  }

  createRightLeg() {
    const width = 20
    const height = 50
    const [x, y] = MatterUitl.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height)
    const constraintLegRight = Matter.Constraint.create({
      bodyA: this.bodyBody,
      pointA: { x: 20, y: -30 },
      bodyB: body,
      pointB: { x: 0, y: -25 },
      stiffness: 0.01,
      damping: 1,
      length: 40,
      // render: {
      //   visible: false,
      // },
    })
    this.addToWorld([body, constraintLegRight])
    return body
  }

  createLeftArm() {
    const width = 20
    const height = 50
    const [x, y] = MatterUitl.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height)
    const constraintArmLeft = Matter.Constraint.create({
      bodyA: this.bodyBody,
      pointA: { x: -20, y: 30 },
      bodyB: body,
      pointB: { x: 0, y: -25 },
      stiffness: 0.01,
      damping: 1,
      length: 40,
      // render: {
      //   visible: false,
      // },
    })
    this.addToWorld([body, constraintArmLeft])
    return body
  }

  createRightArm() {
    const width = 20
    const height = 50
    const [x, y] = MatterUitl.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height)
    const constraintArmRight = Matter.Constraint.create({
      bodyA: this.bodyBody,
      pointA: { x: 20, y: 30 },
      bodyB: body,
      pointB: { x: 0, y: -25 },
      stiffness: 0.01,
      damping: 1,
      length: 40,
      // render: {
      //   visible: false,
      // },
    })
    this.addToWorld([body, constraintArmRight])
    return body
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addToWorld(bodys: any[]) {
    Matter.Composite.add(this.world, bodys)
  }
}
