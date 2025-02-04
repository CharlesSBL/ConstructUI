import Tag from "./Tag";

export default class Style extends Tag {
  private linkElem: HTMLLinkElement;

  constructor(destination: string) {
    super("link");

    this.linkElem = this.getElem() as HTMLLinkElement;
    this.linkElem.rel = "stylesheet";
    this.linkElem.type = "text/css";
    this.linkElem.href = destination;
  }

  getLink(): HTMLLinkElement {
    return this.linkElem;
  }

  render(): void {
    document.head.appendChild(this.getElem());
  }
}
