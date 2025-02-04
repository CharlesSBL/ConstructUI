import I_shadow from "../../interfaces/I_shadow";
import ShadowColor from "./valueShadowColor/ValueShadowColor";
import ShadowPosition from "./valueShadowPosition/ValueShadowPosition";

export default class ValueShadow implements I_shadow {
  private position: ShadowPosition;
  private color: ShadowColor;
  private value: string;

  constructor(position: ShadowPosition, color: ShadowColor) {
    this.position = position;
    this.color = color;

    this.value = `${this.color.getColor()} ${this.position.getPosition()}`;
  }

  public getShadowValue(): string {
    return this.value;
  }
}
