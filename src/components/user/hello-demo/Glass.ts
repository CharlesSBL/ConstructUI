import hello from "./Hello";
import './Glass.css'
import Tag from "../../raw/Tag";

const createGlassElement = (): Tag => {
    const glass = new Tag("div");
    glass.setClass("glass");
    return glass;
}

const glass = (tag: Tag): void => {
    const glassElement = createGlassElement();
    tag.addChild(glassElement.getElem());
    hello(glassElement);
}

export default glass;