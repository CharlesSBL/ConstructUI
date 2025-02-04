import hello from "./Hello";
import './Glass.css'
import Tag from "../../raw/Tag";

class Glass extends Tag {
    constructor (){
        super("div");

        this.setClass("glass");

        hello(this);
    }
}

const glass = (tag: Tag): void => {
    const glassElement = new Glass();
    tag.addChild(glassElement.getElem());
}

export default glass;