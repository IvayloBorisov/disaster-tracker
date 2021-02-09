import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { LocationMarker } from '../index';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = ({ eventData }) => {

    const [ viewport, setViewport ] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 51,
        longitude: 5,
        zoom: 1,
        position: 'absolute',
        top: '0',
        left: '0'
    });

    return(
        <div>
            <ReactMapGL
             {...viewport}
             mapboxApiAccessToken= { MAPBOX_TOKEN }
             mapStyle= "mapbox://styles/ivoborisov/ckktptabb2du117qkyo4jg5tq"
             onViewportChange= { (viewport) => setViewport(viewport) }
            >
                { eventData.map(event => <LocationMarker key={ event.id } {...event}/>) }
            </ReactMapGL>
        </div>
    )
}

export default MapComponent;