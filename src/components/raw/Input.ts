import Tag from "./Tag";

export default class Input extends Tag {
  constructor() {
    super("input");

    this.setAttribute("type", "text");
    this.setAttribute("size", "10");
  }

  getInput(): HTMLInputElement {
    return this.getElem() as HTMLInputElement;
  }
}
