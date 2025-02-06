import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import ReactMapGL, { Marker } from "react-mapbox-gl";

const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56]
];

const ReactMapboxGl = ReactMapGL({} as any);


const Map = ({
  children
}: {
  children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>;
}) => {
  
  return (
    <ReactMapboxGl
      style="mapbox://styles/mapbox/streets-v11"
      // fitBounds={GERMANY_BOUNDS}
      center={[-122.4376, 37.7577]}
      zoom={[8]}
      containerStyle={{ width: "100%", height: "100%" }}
    >
      <Marker coordinates={[-122.4376, 37.7577]}>
        <div style={{ zIndex:"99999", background: "lime", width: "20px", height: "20px", color: "red", border: "5px dotted red" }}>HELLO</div>
      </Marker>
    </ReactMapboxGl>
  )

}

export default Map;
