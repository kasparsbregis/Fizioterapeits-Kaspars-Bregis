import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";

import style from "./map.module.css";

const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-100">
        <div className="text-gray-500">Ielādē karti...</div>
      </div>
    );
  }

  return (
    <MapContainer
      className={style.map}
      center={[57.158253159438225, 24.85137189068413]}
      zoom={18}
      scrollWheelZoom={true}
      zoomControl={true}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        minZoom={10}
      />

      <CircleMarker
        center={[57.158253159438225, 24.85137189068413]}
        radius={15}
        color="orange"
        fillColor="orange"
        opacity={1}
      >
        <Tooltip
          permanent={true}
          opacity={0.7}
          direction="top"
          className="mx-auto"
        >
          <div className="flex flex-row items-center gap-1 pr-6">
            <Image
              src={"/logo-fiziokaspars.png"}
              alt="Kaspars Bregis"
              width={25}
              height={25}
              priority={false}
            />
            <p className="font-bold">Breģis Kaspars - fizioterapeita prakse</p>
          </div>
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
};

export default Map;
