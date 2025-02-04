export default class ShadowColor {
  private red: number;
  private green: number;
  private blue: number;
  private alpha: number;

  private rgba: string;
  constructor(red: number, green: number, blue: number, alpha: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;

    this.rgba = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha}%)`;
  }

  public getColor(): string {
    return this.rgba;
  }
}
