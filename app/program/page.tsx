"use client";
import React, { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
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
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Vingrinājumu programma &quot;Vesela mugura&quot;
          </h2>
          {/* <p className="section-description mt-5">
            Viss par un ap fizioterapiju!
          </p> */}
        </div>
      </BlurFade>
      {/* Display the current video */}
      <BlurFade
        inView
        delay={0.5}
        className="mx-auto flex flex-col items-center justify-center px-6"
      >
        <div className="py-5">
          <div className="rounded-xl border border-[#f5712c] bg-[#f5712c] p-px">
            <video
              className="rounded-lg"
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
        <div className="flex w-full flex-col tracking-tight">
          <h1 className="text-xl font-bold">Quadriceps</h1>
          <span>Celt kāju tā un tad šitā. Pēc tam rotācija paldies</span>
          <span>X reizes ar vienu kāju, pēc tam ar otru</span>
        </div>
        {/* Button to play the next video */}
        <div className="flex gap-5 py-5">
          {currentVideoIndex !== 0 && (
            // <button className="" onClick={playPrevVideo}>
            //   Previous
            // </button>
            <Button
              variant={"outline"}
              className="border-[#292929] bg-transparent hover:bg-[#292929] hover:text-white"
              onClick={playPrevVideo}
            >
              Iepriekšējais
            </Button>
          )}
          {currentVideoIndex !== videos.length - 1 && (
            // <button className="" onClick={playNextVideo}>
            //   Next
            // </button>
            <Button
              className="bg-[#f5712c] hover:bg-orange-600"
              onClick={playNextVideo}
            >
              Nākamais
            </Button>
          )}
          {currentVideoIndex === videos.length - 1 && (
            // <button className="border border-black bg-gradient-to-r from-fuchsia-400 via-blue-500 to-yellow-300">
            //   Finish
            // </button>
            <Button className="border border-black bg-gradient-to-r from-fuchsia-400 via-blue-500 to-yellow-300">
              Finish
            </Button>
          )}
          {/* {currentConfettiIndex === 1 && <Confetti gravity={0.05} />} */}
        </div>
      </BlurFade>
      <Footer />
    </div>
  );
};

export default Program;
