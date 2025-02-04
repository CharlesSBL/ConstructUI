// import Root from "../../../main"
// import Tag from "../../Tag";

// export default class Anim {
//     constructor(root: Root) {
//         let intervalCount = 0;
//         const intervalId = setInterval(() => {
//             const anim = new Tag("div");
//             anim.setID(`anim`);
//             anim.getElem().style.animation = `Ianim 10000ms ease-in-out infinite`;

//             anim.getElem().style.top = ``;
//             anim.getElem().style.left = `${Math.random() * 90}vw`;
//             anim.getElem().style.backgroundColor = `rgba(${Math.random() * 256}, 255, 255, 0.5)`;

//             root.addChild(anim.getElem());

//             setTimeout(() => {
//                 root.getElem().removeChild(anim.getElem());
//             }, 10000);

//             intervalCount++;
//             if (intervalCount === 50) {
//                 clearInterval(intervalId);
//                 console.log("Interval has been cleared after 5 executions.");
//             }
//         }, 2000);
//     }
// }
