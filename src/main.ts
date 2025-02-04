import Tag from "./components/Tag";

import "./main.css";

// singleton
class Root extends Tag {
  private static root: Root;

  private constructor() {
    // creating div tag
    super("div");

    // setting as root tag in body html
    this.setClass("root");
    this.render();

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
