import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { LocationMarker, PopupComponent, Location, Header } from "../index";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = ({ eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 39.7837304,
    longitude: -100.4458825,
    zoom: 4,
  });

  const markers = eventData.map((event) => {
    const { geometries, categories, title } = event;
    const longitude = geometries[0].coordinates[0];
    const latitude = geometries[0].coordinates[1];
    const disasterCategory = categories[0].title;
    console.log(event)
    const eventInfo = {
      longitude,
      latitude,
      disasterCategory,
      title,
    };
    return (
      <LocationMarker
        key={event.id}
        {...eventInfo}
        onClick={() => setLocationInfo({ ...eventInfo })}
      />
    );
  });

  return (
    <div>
        <Header />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/ivoborisov/ckktptabb2du117qkyo4jg5tq"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {markers}
          <Location />
          {locationInfo && (
            <PopupComponent
              {...locationInfo}
              onClick={() => setLocationInfo(null)}
            />
          )}
        </ReactMapGL>      
    </div>
  );
};

export default MapComponent;
