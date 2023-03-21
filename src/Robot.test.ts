import { MartianRobot } from './Robot'
import { Direction } from './Direction'

describe('MartianRobot', () => {
  it('instatiates', () => {
    expect(() => new MartianRobot()).not.toThrow()
  })

  it('starts at 0, 0', () => {
    const robot = new MartianRobot()
    expect(robot.getPosition()).toEqual({ x: 0, y: 0 })
  })

  it('starts facing North', () => {
    const robot = new MartianRobot()
    expect(robot.getDirection()).toEqual(Direction.North)
  })

  it('can be given a starting location and direction', () => {
    const robot = new MartianRobot(1, 1, Direction.East)
    expect(robot.getPosition()).toEqual({ x: 1, y: 1 })
    expect(robot.getDirection()).toEqual(Direction.East)
  })
})