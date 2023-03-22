import { MartianRobot, Status } from './Robot'
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

  it('can turn left', () => {
    const robot = new MartianRobot(1, 1, Direction.East)
    robot.turnLeft()
    expect(robot.getDirection()).toEqual(Direction.North)
  })

  it('can turn right', () => {
    const robot = new MartianRobot(1, 1, Direction.East)
    robot.turnRight()
    expect(robot.getDirection()).toEqual(Direction.South)
  })

  it('can move forward', () => {
    const robot = new MartianRobot(1, 1, Direction.East)
    robot.moveForward()
    expect(robot.getPosition()).toEqual({ x: 2, y: 1 })
  })

  it('can be marked as lost', () => {
    const robot = new MartianRobot(1, 1, Direction.East)
    robot.markLost()
    expect(robot.getStatus()).toEqual(Status.Lost)
  })

  it('cannot move or turn if lost', () => {
    const robot = new MartianRobot(1, 1, Direction.East)
    robot.markLost()
    robot.moveForward()
    robot.turnLeft()
    expect(robot.getPosition()).toEqual({ x: 1, y: 1 })
    expect(robot.getDirection()).toEqual(Direction.East)
  })
})
