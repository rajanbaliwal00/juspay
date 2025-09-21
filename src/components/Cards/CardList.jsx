import React from "react";
import Card from "./Card";
import { Col, Row, theme } from "antd";

const CardList = () => {
  const {
    token: { card1Color, card2Color, card3Color },
  } = theme.useToken();
  return (
    <>
      <Row gutter={[28, 28]} style={{ marginBottom: "1.75rem" }}>
        <Col span={12}>
          <Card
            title={"Customers"}
            stats={"3,781"}
            value={"+11.01%"}
            color={card1Color}
            textColor={"#000"}
            trend="up"
          />
        </Col>
        <Col span={12}>
          <Card
            title={"Orders"}
            stats={"1,219"}
            value={"-0.03%"}
            color={card2Color}
            trend="down"
          />
        </Col>
      </Row>
      <Row gutter={[28, 28]}>
        <Col span={12}>
          <Card
            title={"Revenue"}
            stats={"$695"}
            value={"+15.03%"}
            color={card2Color}
            trend="up"
          />
        </Col>
        <Col span={12}>
          <Card
            title={"Growth"}
            stats={"30.1%"}
            value={"+6.08%"}
            color={card3Color}
            textColor={"#000"}
            trend="up"
          />
        </Col>
      </Row>
    </>
  );
};

export default CardList;
