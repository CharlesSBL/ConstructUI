import Tag from "../../components/Tag";

import "./ToDoFoot.css";
import ToDoFootBlock from "./todoFootBlock/ToDoFootBlock";

export default class ToDoFoot extends Tag {
  constructor() {
    super("ol");

    this.setClass("todo-foot");

    for (let i = 0; i < 3; i++) {
      const block = new ToDoFootBlock();

      block.setIndex(i.toString());
      block.setText("value: " + Math.random() * 1 * i);

      this.addChild(block.getElem());
    }
  }
}
