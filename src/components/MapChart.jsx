import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [15, -4],
        scale: 1500
      }}
      style={{ width: "70%", height: "70%",borderRadius: "50%", boxShadow: "0 0 15px white" }}
    >
      <Geographies
        geography="/features.json"
        fill="#410e98af"
        stroke="#d7d7d7"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[33.38044, 47.90966]}
        dx={-90}
        dy={40}
        connectorProps={{
          stroke: "#fefefe",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          style={{ fontSize: "36px", textShadow: "0 0 10px black" }}
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#ffffff"
        >
          {`Ukraine, Kryviy Rih`}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
