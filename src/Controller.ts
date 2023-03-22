import { Robot, MartianRobot } from "./Robot";
import { Direction } from "./Direction";

interface Controller {
  instruct: (instructions: string) => void;
  command: (command: string) => void;
}

export class RobotController {
  public command(command: string) {
    const commands = command.split(`\n`)
    const gridSize = commands.shift()
    const robotSpecifications = splitArrayIntoPairs(commands)
    return robotSpecifications.map(([startingLocation, instructions]) => {
      const locationSpecification = startingLocation.trim().split(' ')
      const x = parseInt(locationSpecification[0])
      const y = parseInt(locationSpecification[1])
      const direction = locationSpecification[2] as Direction
      const robot = new MartianRobot(x, y, direction)
      this.instruct(instructions.trim(), robot)
      return `${robot.getPosition().x} ${robot.getPosition().y} ${robot.getDirection()}`
    }).join(`\n`)
  }

  public instruct(instructionsString: string, robot: Robot) {
    const instructions = instructionsString.split('')
    instructions.forEach(instruction => {
      this.processInstructions(instruction, robot)
    })
  }

  private processInstructions(instruction: string, robot: Robot) {
    if (instruction === "F") { robot.moveForward() }
    if (instruction === "R") { robot.turnRight() }
    if (instruction === "L") { robot.turnLeft() }
  }
}

export function splitArrayIntoPairs(array: string[]) {
  return array.reduce((result: string[][], value: string, index: number, array: string[]) => {
    if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
    return result;
  }, [])
}