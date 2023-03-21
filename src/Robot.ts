type Position = { x: number, y: number }

interface Robot {
  getPosition: () => Position;
}

export class MartianRobot implements Robot {
  private x: number;
  private y: number;
  
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  public getPosition = () => {
    return {x: this.x, y: this.y}
  }
}