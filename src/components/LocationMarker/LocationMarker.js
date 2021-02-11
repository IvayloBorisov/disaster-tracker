import { Marker } from "react-map-gl";
import styles from './LocationMarker.module.css';

const LocationMarker = ({ latitude, longitude, disasterCategory, onClick }) => {

  const iconName = disasterCategory.split(" ")[0].toLowerCase();

  return(
    longitude && latitude ?
      <Marker latitude={latitude} longitude={longitude}>
        <div onClick={onClick}>
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + `/icons/${iconName}.png`}
            alt={`${disasterCategory}-icon`}
          />
        </div>
      </Marker>
      : ""
  )
};

export default LocationMarker;
