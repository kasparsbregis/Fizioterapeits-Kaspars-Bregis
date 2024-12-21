import React from "react";

import GoogleMapComponent from "./Map";
import BlurFade from "./ui/blur-fade";

const LocationWithMarker = () => {
  return (
    <section className="flex w-full flex-col items-center pt-24 md:pt-40">
      <BlurFade inView delay={0.1} className="px-6">
        <div className="section-heading">
          <h2 className="section-title">Lokācija</h2>
          <p className="section-description mt-5">
            Pils iela 13a, Sigulda, LV-2150 (3.stāvs pa kreisi)
          </p>
        </div>
      </BlurFade>
      <div className="mt-10 w-full max-w-7xl px-6">
        <BlurFade inView delay={0.15} className="overflow-hidden rounded-lg">
          <GoogleMapComponent />
        </BlurFade>
      </div>
    </section>
  );
};

export default LocationWithMarker;
