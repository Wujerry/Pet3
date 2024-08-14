export default class MatterUitl {
  static stageWidth = window.innerWidth
  static stageHeight = window.innerHeight

  static getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
  }

  static getRandomPosition(boxWidth = 0, boxHeight = 0) {
    const x = this.getRandomInt(0, MatterUitl.stageWidth - boxWidth)
    const y = this.getRandomInt(0, MatterUitl.stageHeight - boxHeight)
    return [x, y]
  }

  static getRandomPositionX(boxWidth = 0) {
    return this.getRandomInt(0, MatterUitl.stageWidth - boxWidth)
  }

  static getRandomPositionY(boxHeight = 0) {
    return this.getRandomInt(0, MatterUitl.stageHeight - boxHeight)
  }
}
