import React from "react";
import Navbar from "../component/Navbar";

const Watch = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="w-[600px] mx-auto mt-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BAeGLiBZuiQ?si=Ygkj43Hzz8Kk7CND"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BAeGLiBZuiQ?si=Ygkj43Hzz8Kk7CND"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Watch;
