// import Root from "../../../../main";
// import Tag from "../../Tag";

// export default class Anim {
//     private static readonly ANIMATION_DURATION = 10000;
//     private static readonly INTERVAL_DURATION = 2000;
//     private static readonly MAX_INTERVAL_COUNT = 50;

//     constructor(root: Root) {
//         let intervalCount = 0;
//         const intervalId = setInterval(() => {
//             this.createAnimation(root);

//             intervalCount++;
//             if (intervalCount === Anim.MAX_INTERVAL_COUNT) {
//                 clearInterval(intervalId);
//                 console.log("Interval has been cleared after 50 executions.");
//             }
//         }, Anim.INTERVAL_DURATION);
//     }

//     private createAnimation(root: Root): void {
//         const anim = new Tag("div");
//         anim.setID(`anim`);
//         anim.getElem().style.animation = `Ianim ${Anim.ANIMATION_DURATION}ms ease-in-out infinite`;
//         anim.getElem().style.top = ``;
//         anim.getElem().style.left = `${Math.random() * 90}vw`;
//         anim.getElem().style.backgroundColor = `rgba(${Math.random() * 256}, 255, 255, 0.5)`;

//         root.addChild(anim.getElem());

//         setTimeout(() => {
//             root.getElem().removeChild(anim.getElem());
//         }, Anim.ANIMATION_DURATION);
//     }
// }
