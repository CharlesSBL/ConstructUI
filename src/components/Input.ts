import Tag from "./Tag";

export default class Input extends Tag {
  constructor() {
    super("input");

    this.setProps("type", "text");
    this.setProps("size", "10");
  }

  getInput(): HTMLInputElement {
    return this.getElem() as HTMLInputElement;
  }
}
