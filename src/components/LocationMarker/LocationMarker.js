import { Marker } from "react-map-gl";
import styles from "./LocationMarker.module.css";

const LocationMarker = ({ latitude, longitude, disasterCategory, onClick }) => {
  const iconName = disasterCategory.split(" ")[0].toLowerCase();
  const iconSize = 40;

  return longitude && latitude ? (
    <Marker latitude={latitude} longitude={longitude}>
      <div
        style={{
          transform: `translate(${-iconSize / 2}px, ${-iconSize / 2}px)`,
        }}
        onClick={onClick}
      >
        <img
          className={styles.icon}
          src={process.env.PUBLIC_URL + `/icons/${iconName}.png`}
          alt={`${disasterCategory}-icon`}
        />
      </div>
    </Marker>
  ) : (
    ""
  );
};

export default LocationMarker;
