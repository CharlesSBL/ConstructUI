import Button from "../../../../components/Button";
import Tag from "../../../../components/Tag";
import { AnimationEnumTypes } from "../../../../components/animation/AnimationsEnum";

import "./BlockFoot.css";

export default class BlockFoot extends Tag {
  private btnUp: Button;
  private btnDown: Button;
  private btnEdit: Button;
  private btnDelete: Button;

  constructor() {
    super("div");

    this.setClass("block-foot");

    this.btnEdit = new Button();
    this.btnDelete = new Button();
    this.btnUp = new Button();
    this.btnDown = new Button();

    this.btnEdit.setClass("block-foot-button block-foot-button-edit");
    this.btnDelete.setClass("block-foot-button block-foot-button-delete");
    this.btnUp.setClass("block-foot-button block-foot-button-up");
    this.btnDown.setClass("block-foot-button block-foot-button-down");

    this.btnEdit.setText("edit");
    this.btnDelete.setText("delete");
    this.btnUp.setText("up");
    this.btnDown.setText("down");

    this.addChild(this.btnEdit.getElem());
    this.addChild(this.btnDelete.getElem());
    this.addChild(this.btnUp.getElem());
    this.addChild(this.btnDown.getElem());

    this.setAnimation(AnimationEnumTypes.MOVE, "8s ease-in-out infinite");
    this.setShadow("1rem 0.5rem 0.25rem rgba(0, 0, 0, 25%)");
  }
}
