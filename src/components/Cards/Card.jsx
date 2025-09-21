import { Flex, theme, Typography } from "antd";
import React from "react";

const Card = ({ title, stats, value, color, textColor, trend }) => {
  const {
    token: { padding15, radius },
  } = theme.useToken();
  const { Text } = Typography;
  return (
    <div
      style={{
        width: "12.625",
        height: "7rem",
        background: color,
        padding: padding15,
        borderRadius: radius,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontWeight: 600,
          color: textColor,
        }}
      >
        {title}
      </Text>
      <Flex justify="space-between" align="center">
        <Text style={{ fontSize: "1.5rem", fontWeight: 600, color: textColor }}>
          {stats}
        </Text>
        <Text style={{ fontSize: ".8rem", color: textColor }}>
          {value}{" "}
          {trend === "up" ? (
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.45488 1.60777L13 0L11.6198 5.6061L9.89804 3.9532L7.12069 6.84627C7.02641 6.94448 6.89615 7 6.76 7C6.62385 7 6.49359 6.94448 6.39931 6.84627L4.36 4.72199L1.36069 7.84627C1.16946 8.04547 0.85294 8.05193 0.653735 7.86069C0.454529 7.66946 0.44807 7.35294 0.639307 7.15373L3.99931 3.65373C4.09359 3.55552 4.22385 3.5 4.36 3.5C4.49615 3.5 4.62641 3.55552 4.72069 3.65373L6.76 5.77801L9.17665 3.26067L7.45488 1.60777Z"
                fill="#1C1C1C"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z"
                fill="#1C1C1C"
              />
            </svg>
          )}
        </Text>
      </Flex>
    </div>
  );
};

export default Card;
