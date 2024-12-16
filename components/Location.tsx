import React from "react";
import BlurFade from "./ui/blur-fade";
import GoogleMapComponent from "./Map";

const LocationWithMarker = () => {
  return (
    <section className="pt-24 md:pt-40 w-full flex flex-col items-center">
      <BlurFade inView delay={0.3}>
        <div className="section-heading">
          <h2 className="section-title">Lokācija</h2>
          <p className="section-description mt-5">
            Pils iela 13a, Sigulda, LV-2150 (3.stāvs pa kreisi)
          </p>
        </div>
      </BlurFade>
      <div className="w-full mt-10 px-6 max-w-7xl">
        <BlurFade inView delay={0.5} className="rounded-lg overflow-hidden">
          <GoogleMapComponent />
        </BlurFade>
      </div>
    </section>
  );
};

export default LocationWithMarker;
