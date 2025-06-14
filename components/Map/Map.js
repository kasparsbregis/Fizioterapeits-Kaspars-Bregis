import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";

import style from "./map.module.css";

const Map = () => {
  return (
    <MapContainer
      className={style.map}
      center={[57.158253159438225, 24.85137189068413]}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>

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
            />
            <p className="font-bold">Breģis Kaspars - fizioterapeita prakse</p>
          </div>
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
};

export default Map;
