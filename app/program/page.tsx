"use client";
import React, { useState } from "react";

import Navbar from "@/components/Navbar";
const Program = () => {
  const videos = [
    "/ankle1.mp4",
    "/start.mp4",
    "/stretch1.mp4",
    "/trigger6.mp4",
  ];
  // Set initial video (first one in the array)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // Function to handle video switch
  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  const playPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1) % videos.length);
  };

  return (
    <div className="items-center justify-center">
      <Navbar />
      <h1 className="mt-10 flex justify-center text-5xl font-bold">
        Vingrinājumu programma
      </h1>
      {/* Display the current video */}
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="py-5">
          <div className="rounded-xl border border-blue-400 bg-blue-400 p-0.5">
            <video
              className="rounded-xl"
              autoPlay
              muted
              key={currentVideoIndex} // React re-renders when the key changes
              src={videos[currentVideoIndex]}
              controls
              width="600"
            ></video>
          </div>
          {/* <h2>{currentVideoIndex}</h2>
          <h2>{currentConfettiIndex}</h2> */}
        </div>

        <h2>
          Exercise {currentVideoIndex + 1} of {videos.length}
        </h2>
        {/* Button to play the next video */}
        <div className="flex gap-5 py-5">
          {currentVideoIndex !== 0 && (
            <button className="" onClick={playPrevVideo}>
              Previous
            </button>
          )}
          {currentVideoIndex !== videos.length - 1 && (
            <button className="" onClick={playNextVideo}>
              Next
            </button>
          )}
          {currentVideoIndex === videos.length - 1 && (
            <button className="border border-black bg-gradient-to-r from-fuchsia-400 via-blue-500 to-yellow-300">
              Finish
            </button>
          )}
          {/* {currentConfettiIndex === 1 && <Confetti gravity={0.05} />} */}
        </div>
      </div>
    </div>
  );
};

export default Program;
