import { Direction } from './Direction'

export type Position = { x: number, y: number }

export enum Status {
  Operational = 'OPERATIONAL', 
  Lost = 'LOST'
}

export interface Robot {
  getPosition: () => Position;
  getDirection: () => Direction;
  getStatus: () => Status
  turnRight: () => void;
  turnLeft: () => void;
  moveForward: () => void;
  markLost: () => void;
}

export class MartianRobot implements Robot {
  constructor(
    private x = 0, 
    private y = 0, 
    private direction = Direction.North, 
    private status = Status.Operational
  ) {}

  public getPosition = () => {
    return { x: this.x, y: this.y }
  }

  public getDirection = () => {
    return this.direction
  }

  public moveForward() {
    if (this.status === Status.Lost) { return }
    if (this.direction === Direction.North) { 
      this.y++
    }
    if (this.direction === Direction.East) { 
      this.x++ 
    }
    if (this.direction === Direction.South) { 
      this.y--
    }
    if (this.direction === Direction.West) { 
      this.x-- 
    }
  }

  public turnRight() {
    if (this.status === Status.Lost) { return }
    const currentDirection = this.direction
    if (currentDirection === Direction.North) {this.direction = Direction.East}
    if (currentDirection === Direction.East) {this.direction = Direction.South}
    if (currentDirection === Direction.South) {this.direction = Direction.West}
    if (currentDirection === Direction.West) {this.direction = Direction.North}
  }

  public turnLeft() {
    if (this.status === Status.Lost) { return }
    const currentDirection = this.direction
    if (currentDirection === Direction.North) {this.direction = Direction.West}
    if (currentDirection === Direction.West) {this.direction = Direction.South}
    if (currentDirection === Direction.South) {this.direction = Direction.East}
    if (currentDirection === Direction.East) {this.direction = Direction.North}
  }

  public markLost() {
    this.status = Status.Lost
  }

  public getStatus() {
    return this.status
  }
}
