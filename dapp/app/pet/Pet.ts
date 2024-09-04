import * as Matter from 'matter-js'
import generateBox from './box'
import initMouseHandle, { initMouseHandleEfrog } from './mouseHandle'
import MatterUitl from './util'
import PetParts from './parts'
import Efrog from './Efrog'

export function Pet(onBoxClick: () => void) {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies

  // create engine
  const engine = Engine.create({
      // enableSleeping: true,
      gravity: {
        x: 0,
        y: 0,
      },
    }),
    world = engine.world
  const util = new MatterUitl()
  const stageWidth = util.stageWidth
  const stageHeight = util.stageHeight

  // create renderer
  const render = Render.create({
    element: document.getElementById('pet3-wrapper')!,
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

  // create pet parts
  const petParts = new PetParts(world)
  petParts.init()

  const efrog = new Efrog(world)
  efrog.init()

  Composite.add(world, [
    // walls
    Bodies.rectangle(stageWidth / 2, -51, stageWidth, 100, { isStatic: true }),
    Bodies.rectangle(stageWidth / 2, stageHeight + 51, stageWidth, 100, {
      isStatic: true,
    }),
    Bodies.rectangle(stageWidth + 51, stageHeight / 2, 100, stageHeight, {
      isStatic: true,
    }),
    Bodies.rectangle(-51, stageHeight / 2, 100, stageHeight, {
      isStatic: true,
    }),
  ])

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

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: stageWidth, y: stageHeight },
  })

  // init mouse handle when set canvas element 'pointer-events' to 'none'
  initMouseHandle(petParts.bodyBody!)

  initMouseHandleEfrog(efrog.bodyBody!)

  // generate lucky box
  generateBox(engine, world, petParts.bodyBody!, onBoxClick)

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render)
      Matter.Runner.stop(runner)
    },
  }
}
