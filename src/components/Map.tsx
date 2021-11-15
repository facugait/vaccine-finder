import React, { FC, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Practice } from "../types/practice";
import CardInfo from "./CardInfo";

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapContainerStyles = {
  width: "100%",
};

export interface MapProps {
  data?: Practice[] | undefined;
}

const defaultCenter = {
  lat: 40.73863,
  lng: -73.98294,
};

const Map: FC<MapProps> = (data) => {
  const [selected, setSelected] = useState<Practice>();
  const [mapWidth, setMapWidth] = useState<any>("60vw");

  const onSelect = (item: Practice) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "80vh",
    width: mapWidth,
    maxWidth: "50rem",
  };

  window.addEventListener("resize", () => {
    const width = window.matchMedia("screen and (max-width: 768px)").matches
      ? "90vw"
      : "60vw";
    setMapWidth(width);
  });

  return (
    <div style={mapContainerStyles}>
      <LoadScript googleMapsApiKey={`${GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {data.data?.map((item) => {
            return (
              <Marker
                key={item.name}
                //@ts-ignore
                position={item.location}
                onClick={() => onSelect(item)}
              />
            );
          })}
          {selected?.location && (
            <InfoWindow
              //@ts-ignore
              position={selected.location}
              onCloseClick={() => setSelected({})}
            >
              <CardInfo
                image={selected.image}
                name={selected.name}
                description={selected.description}
                linkBtn={selected.linkToScheduler}
              />
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;
