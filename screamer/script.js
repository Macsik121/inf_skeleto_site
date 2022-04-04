"use strict";

const screamer = document.getElementById("screamer");
const screamerVideo = document.getElementById("screamerVideo");
const congratulation = document.getElementById("congratulation");

const duration = 3000;
// Most used actions converted to a class
class Duration {
    createDuration(durationTime) {
        return duration + durationTime;
    }
}
class TransitionAction {
    constructor(element) {
        this.element = element;
    }
    takeOffTransition() {
        setTimeout(() => {
            this.element.style.transition = null;
        }, 0);
    }
    setTransition(transitionTime = 300) {
        this.element.style.transition = transitionTime + "ms";
    }
}
class TransformAction {
    constructor(element) {
        this.element = element;
    }
    setTransform(transform = "") {
        setTimeout(() => {
            this.element.style.transform = transform;
            console.log(this.element, this.element.style.transform)
        }, 0);
    }
}

const animationDuration = new Duration().createDuration(2000);
const screamerDuration = new Duration().createDuration(3000);
const congratulationsHeight = "100vh";
const congratulationsValue = "35px";

// initial styles
screamer.style.boxShadow = "0 5vh 150px var(--box-shadow-color-screamer) inset";
new TransformAction(screamerVideo).setTransform("scale(0)");
congratulation.style.opacity = "0";
congratulation.style.pointerEvents = "none";
congratulation.style.userSelect = "none";
new TransformAction(congratulation).setTransform(`translateY(${congratulationsValue})`);
congratulation.style.height = `calc(${congratulationsHeight} - ${congratulationsValue})`;

// animation timeouts
setTimeout(() => {
    screamer.style.boxShadow = "none";
    screamer.style.animation = "light 2s alternate";
}, duration);

setTimeout(() => {
    document.body.style.backgroundColor = "#000";
    new TransitionAction(document.body).takeOffTransition();
}, animationDuration - 500);

setTimeout(() => {
    new TransformAction(screamerVideo).setTransform("scale(1)");
    new TransitionAction(document.body).takeOffTransition();
    document.body.style.backgroundColor = "#fff";
    new TransitionAction(screamerVideo).setTransition();
    setTimeout(() => {
        new TransformAction(screamerVideo).setTransform("scale(1) translateX(-100%)");
        screamerVideo.style.opacity = "0";
        setTimeout(() => {
            new TransitionAction(document.body).setTransition();
            new TransitionAction(congratulation).setTransition(700);
            document.body.style.backgroundColor = "#fff";
            congratulation.style.opacity = "1";
            congratulation.style.pointerEvents = "all";
            congratulation.style.userSelect = "text";
            congratulation.style.height = congratulationsHeight;
            new TransformAction(congratulation).setTransform("translateY(0)");
        }, 300);
    }, screamerDuration);
}, animationDuration + 2500);
