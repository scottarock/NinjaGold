export class Room {

  constructor(
    public name: string,
    public minGold: number,
    public maxGold: number
  ) {}

  randomGold() {
    return Math.floor(Math.random() * (this.maxGold - this.minGold + 1)) + this.minGold;
  }
}
