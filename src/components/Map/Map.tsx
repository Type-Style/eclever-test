import React from 'react'
import Map, { Marker } from 'react-map-gl/mapbox';
import useApi from '../../hooks/useApi';

const TOKEN = "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg" // TODO, realworld => move to env

const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56]
];

export default function Map_new() {
  const { citiesData, citiesError } = useApi();

  if (citiesError) {
    return <p>{citiesError.message}</p>;
  }

  return (
    <Map
      initialViewState={{
        bounds: GERMANY_BOUNDS
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={TOKEN}
    >
      {citiesData && citiesData.map((city, index) => {
        console.log(city[0].latlng);
       return  (
        <Marker
          key={`marker-${index}`}
          latitude={city[0].capitalInfo.latlng[0]}
          longitude={city[0].capitalInfo.latlng[1]}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
          }}
        >
          <div style={{ background: "lime", width: "32px", height: "32px", color: "red", border: "2px solid black" }}></div>

        </Marker>
      )})}
    </Map>
  )
}
