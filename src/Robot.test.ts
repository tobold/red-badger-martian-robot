import { MartianRobot } from './Robot'
import { Direction } from './Direction'

describe('MartianRobot', () => {
  it('instatiates', () => {
    expect(() => new MartianRobot()).not.toThrow()
  })

  it('starts at 0, 0', () => {
    const robot = new MartianRobot()
    expect(robot.getPosition()).toEqual({x: 0, y: 0})
  })

  it('starts facing North', () => {
    const robot = new MartianRobot()
    expect(robot.getDirection()).toEqual(Direction.North)
  })
})