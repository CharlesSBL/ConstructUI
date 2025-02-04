import Tag from "../components/Tag";
import ToDoBody from "./toDoBody/ToDoBody";
import ToDoHead from "./toDoHead/ToDoHead";

import "./ToDo.css";
import ToDoFoot from "./toDoFoot/ToDoFoot";
import { AnimationEnumTypes } from "../components/animation/AnimationsEnum";

export default class ToDo extends Tag {
  private body: ToDoBody;
  private head: ToDoHead;
  private foot: ToDoFoot;

  constructor() {
    super("div");

    this.head = new ToDoHead();
    this.addChild(this.head.getElem());

    this.body = new ToDoBody();
    this.setClass("todo");
    this.addChild(this.body.getElem());

    this.foot = new ToDoFoot();
    this.addChild(this.foot.getElem());

    this.setShadow("2.5rem -2.5rem white");
    this.setAnimation(AnimationEnumTypes.MOVE, "4s ease-in-out infinite");
  }
}
