import { Popup } from "react-map-gl";
import styles from "./Popup.module.css";

const PopupComponent = ({ 
      latitude, 
      longitude, 
      title, 
      disasterCategory, 
      onClick }) => {
 
  return (
      <Popup
        className={styles.popup}
        offsetLeft={20}
        offsetTop={10}
        closeButton={false}
        latitude={latitude}
        longitude={longitude}
      >
        <div onClick={onClick}>
          <h3 className={styles.title}>{disasterCategory}</h3>
          <p>
            <span className={styles.subtitle}>Description:</span> {title}
          </p>
          <p>
            <span className={styles.coordinates}>Latitude: {latitude} | </span>
            <span className={styles.coordinates}>Longitude: {longitude}</span>
          </p>
        </div>
      </Popup>
  );
};

export default PopupComponent;
