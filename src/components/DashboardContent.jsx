import { Col, Row, Typography } from "antd";
import React from "react";
import CardList from "./Cards/CardList";
import Projections from "./Charts/ProjectionChart";
import RevenueChart from "./Charts/RevenueChart";
import RevenueByLocation from "./Charts/RevenueByLocation";
import DashboardTable from "./Tables/DashboardTable";
import TotalSalesDonut from "./Charts/TotalSales";

const DashboardContent = () => {
  const { Text } = Typography;
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Text style={{ fontSize: ".9rem", fontWeight: 600 }}>eCommerce</Text>
      </div>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <CardList />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Projections />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <RevenueChart />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <RevenueByLocation />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <DashboardTable />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <TotalSalesDonut />
        </Col>
      </Row>
    </>
  );
};

export default DashboardContent;
