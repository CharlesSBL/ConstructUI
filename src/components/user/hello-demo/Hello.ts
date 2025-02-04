import { AnimationEnumTypes } from "../../raw/animation/AnimationsEnum";
import Tag from "../../raw/Tag";
AnimationEnumTypes


const createHelloTag = (): Tag => {
    const hello = new Tag("p");
    hello.setText("StructUI Hello!");
    hello.addCss("color", "white");
    hello.addCss("font-size", "50px");
    hello.setAnimation(AnimationEnumTypes.MOVE, "4s ease-in-out infinite");
    return hello;
};

function hello (tag: Tag): void {
    const helloTag = createHelloTag();
    tag.addChild(helloTag.getElem());
};

export default hello;