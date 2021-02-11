import { useState, useEffect } from "react";
import { Popup } from "react-map-gl";
import styles from "./Popup.module.css";

const API_KEY = process.env.REACT_APP_GEOCAGE_API_KEY;

const PopupComponent = ({ latitude, longitude, title, onClick }) => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAddress = async () => {
      const fetchAddress = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
      );
      const { results } = await fetchAddress.json();
      setAddress(results[0].formatted);
      setLoading(true);
    };
    getAddress();
  }, [latitude, longitude]);

  return (
    loading && (
      <Popup
      className={styles.popup}
        offsetLeft={20}
        offsetTop={10}
        closeButton= {false}
        latitude={latitude}
        longitude={longitude}
      >
        <div  onClick={onClick}>
          <h3 className={styles.title}>{title}</h3>
          <p>
            <span className={styles.subtitle}>Address:</span> {address}
          </p>
        </div>
      </Popup>
    )
  );
};

export default PopupComponent;
