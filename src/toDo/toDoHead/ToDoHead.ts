import Tag from "../../components/Tag";
import { AnimationEnumTypes } from "../../components/animation/AnimationsEnum";

import "./ToDoHead.css";

export default class ToDoHead extends Tag {
  constructor() {
    super("div");

    this.setClass("todo-head");

    const h1 = new Tag("h1");
    h1.setClass("todo-head-text");
    h1.setText("TODO LIST");

    this.addChild(h1.getElem());

    this.setAnimation(AnimationEnumTypes.MOVE, "4s ease-in-out infinite");
  }
}
