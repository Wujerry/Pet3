import MatterUitl from './util'
import * as Matter from 'matter-js'

export default class PetParts {
  world: Matter.World
  util: MatterUitl
  bodyBody?: Matter.Body
  bodyHead?: Matter.Body
  bodyLeftEye?: Matter.Body
  bodyRightEye?: Matter.Body
  bodyLeftLeg?: Matter.Body
  bodyRightLeg?: Matter.Body
  bodyLeftArm?: Matter.Body
  bodyRightArm?: Matter.Body

  constructor(world: Matter.World, width = window.innerWidth, height = window.innerHeight) {
    this.world = world
    this.util = new MatterUitl(width, height)
  }

  init() {
    this.bodyBody = this.createBody()
    this.bodyHead = this.createHead()
    this.bodyLeftEye = this.createLeftEye()
    this.bodyRightEye = this.createRightEye()
    this.bodyLeftLeg = this.createLeftLeg()
    this.bodyRightLeg = this.createRightLeg()
    this.bodyLeftArm = this.createLeftArm()
    this.bodyRightArm = this.createRightArm()
  }

  createBody(initConstraint = true) {
    const width = 60
    const height = 80
    const body = Matter.Bodies.rectangle(
      this.util.getRandomPositionX(width),
      this.util.getRandomPositionY(height),
      width,
      height,
      {
        chamfer: { radius: [30, 30, 10, 10] },
        render: {
          fillStyle: '#AFD7FB',
          strokeStyle: '#366FBC',
          lineWidth: 1,
        },
      },
    )
    this.addToWorld([body])
    return body
  }

  createHead(initConstraint = true) {
    const r = 25
    const [x, y] = this.util.getRandomPosition(r, r)
    const body = Matter.Bodies.circle(x, y, r, {
      render: {
        fillStyle: '#FCEDA3',
        strokeStyle: '#000',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraint = Matter.Constraint.create({
        bodyA: this.bodyBody,
        pointA: { x: 0, y: 30 },
        bodyB: body,
        pointB: { x: 0, y: 0 },
        damping: 1,
        stiffness: 0.1,
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

  createLeftEye(initConstraint = true) {
    const r = 5
    const [x, y] = this.util.getRandomPosition(r, r)
    const body = Matter.Bodies.circle(x, y, r, {
      collisionFilter: {
        mask: 10,
      },
      render: {
        fillStyle: '#BFF0BF',
        strokeStyle: '#366FBC',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraint = Matter.Constraint.create({
        bodyA: this.bodyHead,
        pointA: { x: 0, y: 10 },
        bodyB: body,
        pointB: { x: 5, y: 3 },
        damping: 0.01,
        stiffness: 0.01,
        length: 0.01,
        render: {
          visible: false,
        },
      })
      this.addToWorld([constraint])
    }
    this.addToWorld([body])
    return body
  }

  createRightEye(initConstraint = true) {
    const r = 5
    const [x, y] = this.util.getRandomPosition(r, r)
    const body = Matter.Bodies.circle(x, y, r, {
      collisionFilter: {
        mask: 10,
      },
      render: {
        fillStyle: '#F7CBCA',
        strokeStyle: '#366FBC',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraintEyeRight = Matter.Constraint.create({
        bodyA: this.bodyHead,
        pointA: { x: 0, y: -10 },
        bodyB: body,
        pointB: { x: 5, y: 3 },
        damping: 0.01,
        stiffness: 0.01,
        length: 0.01,
        render: {
          visible: false,
        },
      })
      this.addToWorld([constraintEyeRight])
    }
    this.addToWorld([body])
    return body
  }

  createLeftLeg(initConstraint = true) {
    const width = 20
    const height = 60
    const [x, y] = this.util.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: 10 },
      render: {
        fillStyle: '#FCEDA3',
        strokeStyle: '#366FBC',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraintLegLeft = Matter.Constraint.create({
        bodyA: this.bodyBody,
        pointA: { x: -20, y: -30 },
        bodyB: body,
        pointB: { x: 0, y: -25 },
        stiffness: 0.01,
        damping: 1,
        length: 40,
        render: {
          strokeStyle: '#366FBC',
          lineWidth: 2,
        },
      })
      this.addToWorld([constraintLegLeft])
    }

    this.addToWorld([body])
    return body
  }

  createRightLeg(initConstraint = true) {
    const width = 20
    const height = 60
    const [x, y] = this.util.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: 10 },
      render: {
        fillStyle: '#F7CBCA',
        strokeStyle: '#366FBC',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraintLegRight = Matter.Constraint.create({
        bodyA: this.bodyBody,
        pointA: { x: 20, y: -30 },
        bodyB: body,
        pointB: { x: 0, y: -25 },
        stiffness: 0.01,
        damping: 1,
        length: 40,
        render: {
          strokeStyle: '#366FBC',
          lineWidth: 2,
        },
      })
      this.addToWorld([constraintLegRight])
    }

    this.addToWorld([body])
    return body
  }

  createLeftArm(initConstraint = true) {
    const width = 20
    const height = 50
    const [x, y] = this.util.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: 10 },
      render: {
        fillStyle: '#F7CBCA',
        strokeStyle: '#366FBC',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraintArmLeft = Matter.Constraint.create({
        bodyA: this.bodyBody,
        pointA: { x: -20, y: 30 },
        bodyB: body,
        pointB: { x: 0, y: -25 },
        stiffness: 0.01,
        damping: 1,
        length: 40,
        render: {
          strokeStyle: '#366FBC',
          lineWidth: 2,
        },
      })
      this.addToWorld([constraintArmLeft])
    }

    this.addToWorld([body])
    return body
  }

  createRightArm(initConstraint = true) {
    const width = 20
    const height = 50
    const [x, y] = this.util.getRandomPosition(width, height)
    const body = Matter.Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: 10 },
      render: {
        fillStyle: '#BFF0BF',
        strokeStyle: '#366FBC',
        lineWidth: 1,
      },
    })
    if (initConstraint) {
      const constraintArmRight = Matter.Constraint.create({
        bodyA: this.bodyBody,
        pointA: { x: 20, y: 30 },
        bodyB: body,
        pointB: { x: 0, y: -25 },
        stiffness: 0.01,
        damping: 1,
        length: 40,
        render: {
          strokeStyle: '#366FBC',
          lineWidth: 2,
        },
      })
      this.addToWorld([constraintArmRight])
    }
    this.addToWorld([body])
    return body
  }

  addToWorld(bodys: any[]) {
    Matter.Composite.add(this.world, bodys)
  }
}
