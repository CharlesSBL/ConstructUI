import "./animation/Animations.css";
import { AnimationEnumTypes } from "./animation/AnimationsEnum";
import ValueShadow from "./values/valueShadow/ValueShadow";

export default class Tag {
  private elem: HTMLElement;

  constructor(type: string) {
    this.elem = document.createElement(type);
  }

  public render(): void {
    document.body.appendChild(this.elem);
  }

  public getElem(): HTMLElement {
    return this.elem;
  }

  public setElem(elem: HTMLElement): void {
    this.elem = elem;
  }

  public addChild(elem: Tag): void {
    this.elem.appendChild(elem.getElem());
  }

  public setText(text: string): void {
    this.elem.innerText = text;
  }

  public setAttribute(type: string, inner: string): void {
    this.elem.setAttribute(type, inner);
  }

  public setID(value: string) {
    this.elem.setAttribute("id", value);
  }

  public setClass(value: string) {
    this.elem.setAttribute("class", value);
  }

  public addCss(property: string, value: string): void {
    this.elem.style.setProperty(property, value);
  }

  public setAnimation(type: AnimationEnumTypes, value: string): void {
    // TODO: animation in tag class
    // move 8s ease-in-out infinite
    this.elem.style.animation = `${type} ${value}`;
  }

  public setShadow(value: string | ValueShadow): void {
    if (typeof value === "string") {
      this.elem.style.boxShadow = value;
    } else if (value instanceof ValueShadow) {
      this.elem.style.boxShadow = value.getShadowValue();
    }
  }
}
