import Tag from "../../../../components/Tag";
import { AnimationEnumTypes } from "../../../../components/animation/AnimationsEnum";

import "./BlockHead.css";

export default class BlockHead extends Tag {
  private pIndex: Tag;
  private pData: Tag;
  constructor() {
    super("div");
    this.setClass("block-head");

    this.pIndex = new Tag("p");
    this.pIndex.setClass("block-head-index");

    this.pData = new Tag("p");
    this.pData.setClass("block-head-data");

    this.addChild(this.pIndex.getElem());
    this.addChild(this.pData.getElem());

    this.setAnimation(AnimationEnumTypes.MOVE, "4s ease-in-out infinite");
  }

  setIndex(value: string): void {
    this.pIndex.setText(value);
  }
  setText(value: string) {
    this.pData.setText(value);
  }
}
