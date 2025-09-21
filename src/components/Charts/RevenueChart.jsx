import { Divider, Flex, theme, Typography } from "antd";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const data = [
  { name: "Jan", current: 12, previous: 10 },
  { name: "Feb", current: 7, previous: 19 },
  { name: "Mar", current: 10, previous: 14 },
  { name: "Apr", current: 18, previous: 12 },
  { name: "May", current: 24, previous: 17 },
  { name: "Jun", current: 20, previous: 24 },
];

export default function ResponsiveRevenueChart() {
  const {
    token: { chartBackground, black100 },
  } = theme.useToken();

  const { Text } = Typography;
  return (
    <div
      style={{
        background: chartBackground,
        borderRadius: "1.2rem",
        padding: "1.6rem",
        fontFamily: "Inter, sans-serif",
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <Flex style={{ gap: "1rem", marginBottom: "1rem" }} align="center">
        <Text
          style={{
            fontSize: ".9rem",
            fontWeight: 600,
          }}
        >
          Revenue
        </Text>
        <Divider type="vertical" style={{ background: black100 }} />
        <div
          style={{
            display: "flex",
            gap: "1.3rem",
            alignItems: "center",
            fontSize: ".8rem",
          }}
        >
          <li>
            Current Week <b> $58,211 </b>
          </li>
          <li>
            Previous Week <b style={{ marginLeft: "0.22rem" }}>$68,768</b>
          </li>
        </div>
      </Flex>
      <div style={{ width: "100%", height: "100%", minHeight: "300px" }}>
        <ResponsiveContainer width="100%" height="95%">
          <LineChart data={data}>
            <CartesianGrid stroke="#ededed" vertical={false} />
            <XAxis
              dataKey="name"
              fontSize={"0.9rem"}
              axisLine={false}
              tickLine={false}
              stroke="#bbb"
              style={{ fontSize: "0.9rem" }}
            />
            <YAxis
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              fontSize={"0.85rem"}
              axisLine={false}
              tickLine={false}
              stroke="#bbb"
              tickFormatter={(v) => `${v}M`}
              style={{ fontSize: "0.85rem" }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#a1c1e7"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#282828"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
              strokeDasharray="0 0 104 10"
            />

            <ReferenceDot
              x="Apr"
              y={18}
              r={0}
              stroke="none"
              label={{
                position: "right",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
