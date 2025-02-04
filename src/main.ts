import Tag from "./components/raw/Tag";
import "./main.css";
import glass from "./components/user/hello-demo/Glass";

class Root extends Tag {
  private static instance: Root;

  private constructor() {
    super("div");
    this.setClass("root");
    this.render();

    glass(this);
  }

  public static render(): void {
    if (!Root.instance) {
      Root.instance = new Root();
    }
  }
}

Root.render();
