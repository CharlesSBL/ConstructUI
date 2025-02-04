import Tag from "./Tag";
import I_clickFunc from "./interfaces/I_clickFunc";

export default class Button extends Tag {
  constructor() {
    super("button");
  }

  setClick(handler: I_clickFunc) {
    this.getElem().addEventListener("click", handler.func);
  }
}
