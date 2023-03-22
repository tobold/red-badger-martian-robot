import { Direction } from './Direction'

type Position = { x: number, y: number }

export interface Robot {
  getPosition: () => Position;
  getDirection: () => Direction;
  turnRight: () => void;
  turnLeft: () => void;
  moveForward: () => void;
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

  public moveForward() {
    if (this.direction === Direction.North) { this.y++ }
    if (this.direction === Direction.East) { this.x++ }
    if (this.direction === Direction.South) { this.y-- }
    if (this.direction === Direction.West) { this.x-- }
  }

  public turnRight() {
    const currentDirection = this.direction
    if (currentDirection === Direction.North) {this.direction = Direction.East}
    if (currentDirection === Direction.East) {this.direction = Direction.South}
    if (currentDirection === Direction.South) {this.direction = Direction.West}
    if (currentDirection === Direction.West) {this.direction = Direction.North}
  }

  public turnLeft() {
    const currentDirection = this.direction
    if (currentDirection === Direction.North) {this.direction = Direction.West}
    if (currentDirection === Direction.West) {this.direction = Direction.South}
    if (currentDirection === Direction.South) {this.direction = Direction.East}
    if (currentDirection === Direction.East) {this.direction = Direction.North}
  }
}
