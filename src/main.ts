import Tag from "./components/Tag";
import "./main.css";


class Root extends Tag {
  private static root: Root;

  private constructor() {
    super("div");

    this.setClass("root");
    this.render();
  }

  public static render(): void {
    if (!Root.root) {
      Root.root = new Root();
    }
  }
}


Root.render();
