import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Page5: FC = () => {
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const navigate = useNavigate();
    window.onkeydown = function() {};
    function hideElement(element: HTMLElement) {
        element.style.opacity = "0";
        element.style.pointerEvents = "none";
        element.style.userSelect = "none";
    }
    function activateElement(element: HTMLElement) {
        element.style.opacity = "1";
        element.style.pointerEvents = "all";
        element.style.userSelect = "text";
    }
    useEffect(() => {
        // ending of the animation
        const app = document.getElementById("app");
        const layer = document.getElementById("layer");
        const congratulation = document.getElementById("congratulation");
        if (animationCompleted) {
            setTimeout(() => {
                document.body.style.maxHeight = null;
                document.body.style.overflow = null;
                hideElement(congratulation);
                hideElement(layer);
                window.onkeydown = function(e: KeyboardEvent) {
                    console.log(e)
                    if (e.shiftKey) {
                        if (e.keyCode === 49)
                            navigate("/");
                        else if (e.keyCode === 50)
                            navigate("/page2")
                        else if (e.keyCode === 51)
                            navigate("/page3")
                        else if (e.keyCode === 52)
                            navigate("/page4")
                    }
                };
                console.log(window.onkeydown);
                // duration of transition
                setTimeout(() => {
                    congratulation.style.display = "none";
                    layer.style.display = "none";
                    document.getElementById("screamer").style.display = "none";
                    document.getElementById("screamerVideo").style.display = "none";
                }, 300);
                // congratulation.style.transform = "translateY(-100vh)";
                // layer.style.transform = "translateY(-100vh)";
                // document.getElementById("screamer").style.transform = "translateY(-100vh)";
                // document.getElementById("screamerVideo").style.transform = "translateY(-100vh)";
                // congratulation.style.display = "none";
                // layer.style.display = "none";
            }, 2500);
            // layer.style.transition = "0";
            // layer.style.transform = "translateY(25px)";
            // layer.style.opacity = "0";
            // layer.style.pointerEvents = "none";
        }
    }, [animationCompleted]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const audio = document.getElementById("scary_audio") as HTMLAudioElement;
        audio.play();
        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = "hidden";
        // screamer script starts
        const screamer = document.getElementById("screamer");
        const screamerVideo = document.getElementById("screamerVideo");
        const congratulation = document.getElementById("congratulation");
        const layer = document.getElementById("layer");

        const duration = 1500;
        // Most used actions converted to a class
        class Duration {
            createDuration(durationTime: number) {
                return duration + durationTime;
            }
        }
        class TransitionAction {
            private readonly element: HTMLElement;
            constructor(element: HTMLElement) {
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
            private readonly element: HTMLElement;
            constructor(element: HTMLElement) {
                this.element = element;
            }
            setTransform(transform = "") {
                setTimeout(() => {
                    this.element.style.transform = transform;
                }, 0);
            }
        }

        const animationDuration = new Duration().createDuration(1000);
        // const screamerDuration = new Duration().createDuration(3000);
        const congratulationsHeight = "100vh";
        const congratulationsValue = "35px";

        // initial styles
        screamer.style.boxShadow = "0 5vh 150px var(--box-shadow-color-screamer) inset";
        console.log(screamer.style.boxShadow);
        new TransformAction(screamerVideo).setTransform("scale(0)");
        hideElement(congratulation);
        // congratulation.style.opacity = "0";
        // congratulation.style.pointerEvents = "none";
        // congratulation.style.userSelect = "none";
        new TransformAction(congratulation).setTransform(`translateY(${congratulationsValue})`);
        congratulation.style.height = `calc(${congratulationsHeight} - ${congratulationsValue})`;

        // animation timeouts
        setTimeout(() => {
            screamer.style.boxShadow = "none";
            screamer.style.animation = "light 2s alternate";
        }, duration);

        setTimeout(() => {
            layer.style.backgroundColor = "#000";
            new TransitionAction(layer).takeOffTransition();
        }, animationDuration - 500);

        setTimeout(() => {
            new TransformAction(screamerVideo).setTransform("scale(1)");
            new TransitionAction(layer).takeOffTransition();
            layer.style.backgroundColor = "#fff";
            new TransitionAction(screamerVideo).setTransition();
            setTimeout(() => {
                new TransformAction(screamerVideo).setTransform("scale(1) translateX(-100%)");
                screamerVideo.style.opacity = "0";
                setTimeout(() => {
                    new TransitionAction(layer).setTransition();
                    new TransitionAction(congratulation).setTransition(700);
                    layer.style.backgroundColor = "#fff";
                    activateElement(congratulation);
                    // congratulation.style.opacity = "1";
                    // congratulation.style.pointerEvents = "all";
                    // congratulation.style.userSelect = "text";
                    congratulation.style.height = congratulationsHeight;
                    new TransformAction(congratulation).setTransform("translateY(0)");
                    layer.style.backgroundColor = "#fff";
                    setAnimationCompleted(true);
                }, 300);
            }, 2000);
        }, animationDuration + 1500);
        // script of the screamer ends here

        return () => {
            const app = document.getElementById("app");
            app.style.transition = null;
        }
    }, []);
    return (
        <div className="page5">
            <audio
                id="scary_audio"
                className="scary-audio"
                src="http://localhost:3000/scary_130bpm.wav"
                controls
            />
            <div id="layer" className="layer"></div>
            <div id="screamer" className="screamer">
                <div id="screamerVideo" className="screamer-video" />
            </div>
            <div className="congratulation" id="congratulation">Congratulations! You've got a screamer</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="content">
                FUCK YOU
            </div>
        </div>
    )
}

export default Page5;
