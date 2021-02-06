import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = () => {

    const [ viewport, setViewport ] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 51,
        longitude: 5,
        zoom: 5,
    });

    return(
        <div>
            <ReactMapGL
             {...viewport}
             mapboxApiAccessToken= { MAPBOX_TOKEN }
             mapStyle= "mapbox://styles/ivoborisov/ckktptabb2du117qkyo4jg5tq"
             onViewportChange= { (viewport) => setViewport(viewport) }
            >
            </ReactMapGL>
        </div>
    )
}

export default MapComponent;