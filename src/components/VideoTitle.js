import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-[24%] px-[3%] aspect-video absolute bg-gradient-to-b from-black">
      <h1 className="font-bold text-3xl text-red-600">{title}</h1>
      <p className="pt-4 text-lg w-1/2 text-white">{overview}</p>
      <div className="my-2">
        <button className="bg-gray-600 text-white p-4 px-16 text-xl opacity-95 rounded-l hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="bg-gray-600 text-white p-4 px-16 text-xl opacity-80 rounded-l mx-2 hover:bg-opacity-50">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
