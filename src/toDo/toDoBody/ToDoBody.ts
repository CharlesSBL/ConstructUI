import { AnimationEnumTypes } from "../../components/animation/AnimationsEnum";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Tag from "../../components/Tag";
import BodyToDoButtonHandler from "./bodyHandlers/BodyToDoButtonHandler";

import "./ToDoBody.css";

export default class ToDoBody extends Tag {
  private button: Button;
  private input: Input;

  constructor() {
    super("div");

    // ToDo body
    this.setClass("todo-body");

    // input
    this.input = new Input();
    this.input.setClass("todo-body-input");

    // btn
    this.button = new Button();
    this.button.setText("Add");
    this.button.setClass("todo-body-btn");

    // button handler setup
    const handler = new BodyToDoButtonHandler(this.input);
    this.button.setClick(handler);

    // setting body
    this.addChild(this.input.getElem());
    this.addChild(this.button.getElem());

    this.setAnimation(AnimationEnumTypes.MOVE, "4s ease-in-out infinite");
  }
}
