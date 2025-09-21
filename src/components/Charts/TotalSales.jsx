import { theme, Typography } from "antd";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(28,28,28,0.8)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      >
        {`${(
          (payload[0].value / data.reduce((a, b) => a + b.value, 0)) *
          100
        ).toFixed(1)}%`}
      </div>
    );
  }
  return null;
};

export default function SalesCard() {
  const {
    token: { chartBackground },
  } = theme.useToken();
  const { Text } = Typography;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        gap: "16px",
        width: "100%",
        background: chartBackground,
        borderRadius: "16px",
        fontFamily: "Inter",
      }}
    >
      <Text style={{ fontWeight: 600, fontSize: ".9rem" }}>Total Sales</Text>

      {/* Chart */}
      <ResponsiveContainer
        width={90}
        height={80}
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={40}
            paddingAngle={3}
            cornerRadius={8} // 🔥 makes arcs rounded
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          padding: "8px 0",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "12px",
              color: "#1C1C1C",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: item.color,
                  display: "inline-block",
                }}
              />
              <Text style={{ fontWeight: 400, fontSize: ".8rem" }}>
                {item.name}
              </Text>
            </div>
            <Text style={{ fontWeight: 400, fontSize: ".8rem" }}>
              ${item.value}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
