import { Direction } from './Direction'

type Position = { x: number, y: number }

interface Robot {
  getPosition: () => Position;
  getDirection: () => Direction;
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
}