import { RobotController, splitArrayIntoPairs } from './Controller'

describe('Controller', () => {
  it.skip('receives instructions and passes them down to a single robot', () => {
    const controller = new RobotController()
    const input = `1 1
                  0 0 N
                  F`
    const output = controller.command(input)
    
    expect(output).toEqual(`0 1 N`)
  })

  describe('going out of bounds', () => {
    it('stops moving the robot and marks them as lost', () => {
      const controller = new RobotController()
      const input = `1 1
                    0 0 N
                    FF`
      const output = controller.command(input)
      
      expect(output).toEqual(`0 1 N LOST`)
    })
  })

  describe.skip('acceptance test', () => {
    it('receives instructions and passes them down multiple robots', () => {
    const controller = new RobotController()
    const input = `5 3
                  1 1 E
                  RFRFRFRF
                  3 2 N
                  FRRFLLFFRRFLL
                  0 3 W
                  LLFFFLFLFL`
    const output = controller.command(input)
    
    expect(output).toEqual(
      `1 1 E
      3 3 N LOST
      2 3 S`)
    })
  })
})

describe('splitArrayIntoPairs', () => {
  it('splits an array into pairs', () => {
    const input = ['1', '2', '3', '4', '5', '6']
    const output = splitArrayIntoPairs(input)
    expect(output).toEqual([['1', '2'], ['3', '4'], ['5', '6']])
  })
})