import { Robot, MartianRobot, Position, Status } from "./Robot";
import { Direction } from "./Direction";

interface Controller {
  command: (command: string) => void;
}

export class RobotController implements Controller {
  private gridLimits: Position = { x: 0, y: 0 }
  private lostScents: {x: number, y: number, direction: Direction }[] = []

  public command(command: string) {
    const commands = command.split(`\n`)
    const gridLimits = commands.shift() as string
    this.setGridLimits(gridLimits)

    const robotSpecifications = splitArrayIntoPairs(commands)
    return robotSpecifications.map(([startingLocation, instructions]) => {
      const locationSpecification = startingLocation.trim().split(' ')
      const x = parseInt(locationSpecification[0])
      const y = parseInt(locationSpecification[1])
      const direction = locationSpecification[2] as Direction
      const robot = new MartianRobot(x, y, direction)
      this.instruct(instructions.trim(), robot)
      return this.printReport(robot)
    }).join(`\n`)
  }

  private instruct(instructionsString: string, robot: Robot) {
    const instructions = instructionsString.split('')
    instructions.forEach(instruction => {
      this.processInstructions(instruction, robot)
    })
  }

  private processInstructions(instruction: string, robot: Robot) {
    const position = robot.getPosition()
    if (instruction === "F") { 
      if (this.outOfBounds(robot)) { 
        const lostScent = this.lostScents.find(scent => scent.x === position.x && scent.y === position.y && scent.direction === robot.getDirection())
        if (lostScent) { 
          return 
        }
        this.markAsLost(robot)
      } else {
        robot.moveForward() 
      }
    }
    if (instruction === "R") { robot.turnRight() }
    if (instruction === "L") { robot.turnLeft() }
  }

  private markAsLost(robot: Robot) {
    robot.markLost()
    const position = robot.getPosition()
    this.lostScents.push({x: position.x, y: position.y, direction: robot.getDirection()})
  }
  
  private outOfBounds(robot: Robot): boolean {
    const direction = robot.getDirection()
    const { x, y } = robot.getPosition()
    if (direction === Direction.North) { 
      return y + 1 > this.gridLimits.y
    }
    if (direction === Direction.East) { 
      return x + 1 > this.gridLimits.x
    }
    if (direction === Direction.South) { 
      return y - 1 < 0
    }
    if (direction === Direction.West) { 
      return x - 1 < 0
    }
    return false
  }

  private setGridLimits(gridLimitsCommand: string) {
    const gridLimits = gridLimitsCommand.trim().split(' ')
    this.gridLimits = { x: parseInt(gridLimits[0]), y: parseInt(gridLimits[1]) }
  }

  private printReport(robot: Robot) {
    const position = robot.getPosition()
    const direction = robot.getDirection()
    const status = robot.getStatus()
    const reportParameters: (number | Direction | Status)[] = [position.x, position.y, direction]
    if (status === Status.Lost) { reportParameters.push(status) }
    return reportParameters.join(' ')
  }
}

export function splitArrayIntoPairs(array: string[]) {
  return array.reduce((result: string[][], value: string, index: number, array: string[]) => {
    if (index % 2 === 0)
      result.push(array.slice(index, index + 2));
    return result;
  }, [])
}