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

  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = Direction.North
  }

  public getPosition = () => {
    return { x: this.x, y: this.y }
  }

  public getDirection = () => {
    return this.direction
  }
}