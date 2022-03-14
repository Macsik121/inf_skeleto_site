<<<<<<< HEAD
import React, { FC, useEffect, useState } from "react";

const Page5: FC = () => {
    const [animationCompleted, setAnimationCompleted] = useState(false);
    useEffect(() => {
        const app = document.getElementById("app");
        if (animationCompleted) {
            app.style.transition = "500ms";
            app.style.transform = "translateY(0)";
            app.style.opacity = "1";
            app.style.pointerEvents = "all";
        } else {
            app.style.transition = "0";
            app.style.transform = "translateY(25px)";
            app.style.opacity = "0";
            app.style.pointerEvents = "none";
        }
    }, [animationCompleted]);
    useEffect(() => {
        setTimeout(() => {
            setAnimationCompleted(true);
        }, 2000);
        return () => {
            const app = document.getElementById("app");
            app.style.transition = null;
        }
    }, []);
    return (
        <div className="page5">
            
=======
import React, { FC } from "react";

const Page5: FC = () => {
    return (
        <div className="page5">
            The fifth page
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
        </div>
    )
}

export default Page5;
