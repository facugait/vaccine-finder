import React, { FC, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Practice } from "../types/practice";
import { Button } from "antd";
import CardInfo from "./CardInfo";

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapContainerStyles = {
  width: "100%",
};

export interface MapProps {
  data?: Practice[] | undefined;
}

const defaultCenter = {
  lat: 40.7127,
  lng: -74.0059,
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
      {selected?.location && (
        <CardInfo
          image={selected.image}
          name={selected.name}
          description={selected.description}
          linkBtn={selected.linkToScheduler}
        />
      )}
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
              <div>
                <p>{selected.name}</p>
                <p>{selected.address}</p>
                <p>{selected.phone}</p>
                <p>
                  {selected.linkToScheduler === null ? null : (
                    <Button
                      type="primary"
                      onClick={
                        () =>
                          // (window.location.href = selected.linkToScheduler) // open scheduler in same window
                          window.open(selected.linkToScheduler, "_blank") // open scheduler in new tab
                      }
                    >
                      Make an appointment
                    </Button>
                  )}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;
