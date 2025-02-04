import Tag from "../../../components/Tag";

import "./ToDoFootBlock.css";
import BlockFoot from "./blockFoot/BlockFoot";
import BlockHead from "./blockHead/BlockHead";

export default class ToDoFootBlock extends Tag {
  private foot: BlockFoot;
  private head: BlockHead;

  constructor() {
    super("div");

    this.setClass("todo-foot-block");

    this.head = new BlockHead();
    this.foot = new BlockFoot();

    this.addChild(this.head.getElem());
    this.addChild(this.foot.getElem());
  }

  setIndex(value: string): void {
    this.head.setIndex(value);
  }
  setText(value: string) {
    this.head.setText(value);
  }
}
