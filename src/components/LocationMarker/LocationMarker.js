import { Marker } from "react-map-gl";

const LocationMarker = ({ geometries, categories }) => {
  const longitude = geometries[0].coordinates[0];
  const latitude = geometries[0].coordinates[1];
  const title = categories[0].title.split(" ")[0].toLowerCase();

  return (
    longitude && latitude ?
    <Marker latitude={latitude} longitude={longitude} >
      <div>
        <img src={process.env.PUBLIC_URL + `/icons/${title}.png`} alt={`${title}-icon`} style={{width: '20px'}}/>
      </div>
    </Marker>
    : ""
  );
};

export default LocationMarker;
