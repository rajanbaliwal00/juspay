import { theme, Typography } from "antd";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actual: 20, projection: 28 },
  { name: "Feb", actual: 20, projection: 25 },
  { name: "Mar", actual: 18, projection: 24 },
  { name: "Apr", actual: 22, projection: 29 },
  { name: "May", actual: 15, projection: 20 },
  { name: "Jun", actual: 20, projection: 24 },
];

export default function Projections() {
  const {
    token: { chartBackground },
  } = theme.useToken();

  const { Text } = Typography;
  return (
    <div
      style={{
        background: chartBackground,
        borderRadius: "1rem",
        padding: 18,
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        margin: "0 auto",
      }}
    >
      <Text style={{ fontWeight: 600, fontSize: 14, marginBottom: ".5rem" }}>
        Projections vs Actuals
      </Text>

      <ResponsiveContainer width="100%" height={196}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            stroke="#bbb"
          />
          <YAxis
            domain={[0, 10]}
            ticks={[0, 10, 20, 30]}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            stroke="#bbb"
            tickFormatter={(v) => `${v}M`}
          />
          <Bar
            dataKey="actual"
            stackId="a"
            fill="rgba(168, 197, 218, 1)"
            barSize={24}
          />
          <Bar
            dataKey="projection"
            stackId="a"
            fill="rgba(168, 197, 218, .7)"
            barSize={24}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
