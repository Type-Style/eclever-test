import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import useApi from '../../hooks/useApi';

const TOKEN = "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg" // TODO, realworld => move to env

const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56]
];

type popupInfo = {
  name: string;
  lat: number;
  lon: number;
}
interface MarkerColors {
  [cityName: string]: string;
}

export default function Map_component() {
  const { citiesData, citiesError } = useApi();
  const [popupInfo, setPopupInfo] = useState<popupInfo | null>(null);
  const [markerColors, setMarkerColors] = useState<MarkerColors>({});


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

        const color = markerColors[city[0].capital[0]];

        return (
          <Marker
            key={`marker-${index}`}
            latitude={city[0].capitalInfo.latlng[0]}
            longitude={city[0].capitalInfo.latlng[1]}
            anchor="center"
            onClick={e => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setPopupInfo({ "name": city[0].capital[0], lat: city[0].capitalInfo.latlng[0], lon: city[0].capitalInfo.latlng[1] });
            }}
          >
            <div style={{ background: color || "rgba(0,0,0,0.2)", width: "32px", height: "32px", color: "red", border: "2px solid black" }}></div>

          </Marker>
        )
      })}

      {popupInfo && (
        <Popup
          anchor="top"
          latitude={Number(popupInfo.lat)}
          longitude={Number(popupInfo.lon)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            <h1>{popupInfo.name}</h1>
            <label> Set Color: <br/>
              <input
                type="color"
                value={markerColors[popupInfo.name] || "rgba(0,0,0,0.2)"}
                onChange={(e) => {
                  setMarkerColors((prevColors) => ({ ...prevColors, [popupInfo.name]: e.target.value }));
                }}
              />
            </label>
          </div>
        </Popup>
      )}
    </Map>
  )
}
