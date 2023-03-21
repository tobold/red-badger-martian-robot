import { Direction } from './Direction'

type Position = { x: number, y: number }

interface Robot {
  getPosition: () => Position;
  getDirection: () => Direction;
  instruct: (instructions: string) => void;
}

export class MartianRobot implements Robot {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(x = 0, y = 0, direction = Direction.North) {
    this.x = x;
    this.y = y;
    this.direction = direction
  }

  public getPosition = () => {
    return { x: this.x, y: this.y }
  }

  public getDirection = () => {
    return this.direction
  }

  public instruct(instructionsString: string) {
    const instructions = instructionsString.split('')
    instructions.forEach(instruction => {
      this.processInstructions(instruction)
    })
  }

  private processInstructions(instruction: string) {
    if (instruction === "F") { this.moveForward() }
    if (instruction === "R") { this.turnRight() }
  }

  private moveForward() {
    if (this.direction === Direction.North) { this.y++ }
    if (this.direction === Direction.East) { this.x++ }
    if (this.direction === Direction.South) { this.y-- }
    if (this.direction === Direction.West) { this.x-- }
  }

  private turnRight() {
    const currentDirection = this.direction
    if (currentDirection === Direction.North) {this.direction = Direction.East}
    if (currentDirection === Direction.East) {this.direction = Direction.South}
    if (currentDirection === Direction.South) {this.direction = Direction.West}
    if (currentDirection === Direction.West) {this.direction = Direction.North}
  }
}