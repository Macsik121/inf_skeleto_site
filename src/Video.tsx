import React, { FC, useEffect } from "react";

const Video: FC = () => {
    useEffect(() => { const video = document.getElementById("video") as HTMLVideoElement; video?.play(); }, []);
    return (
        <video className="video" id="video" controls autoPlay loop>
            <source src="/images/video.mp4" type="video/mp4" />
        </video>
        // <img className="video" src="/images/video.gif" alt="Video" />
    )
}

export default Video;
