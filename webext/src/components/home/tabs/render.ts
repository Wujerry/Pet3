import * as Matter from 'matter-js'
import PetParts from '@/pet/parts'
import { RenderType } from './Preview'

export function destroy(
  render: Matter.Render,
  runner: Matter.Runner,
  engine: Matter.Engine
) {
  if (!render) return
  Matter.Render.stop(render)
  Matter.Runner.stop(runner)
  render.canvas.remove()

  if (!engine) return
  Matter.World.clear(engine.world, true)
  Matter.Engine.clear(engine)
}

export function run(
  stageWidth: number,
  stageHeight: number,
  element: HTMLDivElement,
  type: RenderType
) {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite

  const engine = Engine.create({
      gravity: {
        x: 0,
        y: type === 'Full' ? 0 : 1,
      },
    }),
    world = engine.world

  // create renderer
  const render = Render.create({
    element,
    engine: engine,
    options: {
      width: stageWidth,
      height: stageHeight,
      showAngleIndicator: true,
      wireframes: false,
      background: 'transparent',
    },
  })

  Render.run(render)

  // create runner
  const runner = Runner.create()
  Runner.run(runner, engine)

  const petParts = new PetParts(world, stageWidth, stageHeight)
  let body: Matter.Body | undefined
  if (type === 'Full') {
    petParts.init()
  } else {
    body = petParts[`create${type}`](false)
  }
  const constraint = Matter.Constraint.create({
    pointA: { x: stageWidth / 2, y: 30 },
    bodyB: type === 'Full' ? petParts.bodyHead! : body!,
    pointB: { x: 0, y: 0 },
    length: 60,
    stiffness: 0.1,
    damping: 1,
  })
  Composite.add(world, constraint)

  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        // allow bodies on mouse to rotate
        angularStiffness: 0,
        render: {
          visible: false,
        },
      },
    })

  Composite.add(world, mouseConstraint)

  // keep the mouse in sync with rendering
  render.mouse = mouse
  return { render, runner, engine }
}
