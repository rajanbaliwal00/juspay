import { theme, Typography } from "antd";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const cities = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 },
];

const maxRevenue = Math.max(...cities.map((c) => c.revenue));

export default function RevenueByLocation() {
  const {
    token: { chartBackground, cityFill, cityStroke, mapColor },
  } = theme.useToken();

  const { Text } = Typography;
  return (
    <div
      style={{
        background: chartBackground,
        borderRadius: "1rem",
        padding: "1.5rem",
        width: "100%",
        margin: "0 auto",
        fontFamily: "Inter,sans-serif",
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: ".9rem",
          textAlign: "center",
        }}
      >
        Revenue by Location
      </Text>
      <div style={{ marginBottom: "1.3rem", marginTop: "0.5rem" }}>
        <ComposableMap
          projectionConfig={{ scale: 96, center: [0, 14] }}
          width={400}
          height={190}
          style={{ width: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={"rgba(168, 197, 218, .5)"}
                  stroke={mapColor}
                  strokeWidth={0.8}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0099)",
                  }}
                />
              ))
            }
          </Geographies>
          {cities.map(({ name, coordinates }, i) => (
            <Marker key={name} coordinates={coordinates}>
              <circle
                r={5}
                fill={cityFill}
                stroke={cityStroke}
                strokeWidth={2}
                style={{ boxShadow: "rgba(0, 0, 0, 0.1)" }}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div>
        {cities.map((city) => (
          <>
            <div
              key={city.name}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: ".3rem",
              }}
            >
              <span style={{ fontSize: ".8rem", fontWeight: 500, flex: 1 }}>
                {city.name}
              </span>
              <span style={{ fontSize: ".8rem", fontWeight: 600 }}>
                {city.revenue}K
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.3rem",
                background: "#e5ecf2", // Light unfilled color for the track
                borderRadius: "0.75rem",
                position: "relative",
                overflow: "hidden", // Ensures inner bar stays rounded with parent
              }}
            >
              <div
                style={{
                  width: `${(city.revenue / maxRevenue) * 100}%`, // Percentage fill
                  height: "100%",
                  background: "#a0bdd4", // Darker filled color
                  borderRadius: "0.75rem",
                  transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
