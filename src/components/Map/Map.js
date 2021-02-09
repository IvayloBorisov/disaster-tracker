import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { LocationMarker, PopupComponent } from "../index";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = ({ eventData }) => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 39.7837304,
    longitude: -100.4458825,
    zoom: 4,
  });

  

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/ivoborisov/ckktptabb2du117qkyo4jg5tq"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {eventData.map(event => <LocationMarker key={event.id} {...event} />)}
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
