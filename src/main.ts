import Tag from "./components/Tag";
import ToDo from "./toDo/ToDo";

import "./main.css";

// singleton
class Root extends Tag {
  private static root: Root;
  private todo: ToDo;

  private constructor() {
    // creating div tag
    super("div");

    // setting as root tag in body html
    this.setClass("root");
    this.render();

    // TODO: rework anim class
    // new Anim(this);

    // adding as first child the todo app tag
    this.todo = new ToDo();
    this.addChild(this.todo.getElem());
  }

  // singleton check if exist and run constructor if need
  public static render(): void {
    if (!Root.root) {
      Root.root = new Root();
    }
  }
}

// run main func
Root.render();
