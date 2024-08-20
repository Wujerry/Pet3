export default class MatterUitl {
  stageWidth = window.innerWidth
  stageHeight = window.innerHeight
  constructor(width = window.innerWidth, height = window.innerHeight) {
    this.stageWidth = width
    this.stageHeight = height
  }

  getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
  }

  getRandomPosition(boxWidth = 0, boxHeight = 0) {
    const x = this.getRandomInt(0, this.stageWidth - boxWidth)
    const y = this.getRandomInt(0, this.stageHeight - boxHeight)
    return [x, y]
  }

  getRandomPositionX(boxWidth = 0) {
    return this.getRandomInt(0, this.stageWidth - boxWidth)
  }

  getRandomPositionY(boxHeight = 0) {
    return this.getRandomInt(0, this.stageHeight - boxHeight)
  }
}
