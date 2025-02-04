export default class ValueShadowPosition {
  private horizontal: string;
  private vertical: string;
  private blur: string;

  private position: string;
  private format: string;
  constructor(
    format: string,
    horizontal: number,
    vertical: number,
    blur: number,
  ) {
    this.format = format;

    this.horizontal = `${horizontal}${this.format}`;
    this.vertical = `${vertical}${this.format}`;
    this.blur = `${blur}${this.format}`;

    this.position = `${this.horizontal} ${this.vertical} ${this.blur}`;
  }

  public getPosition(): string {
    return this.position;
  }
}
