import { Col, Row } from "antd";
import React from "react";
import CardList from "./Cards/CardList";
import Projections from "./Charts/ProjectionChart";
import RevenueChart from "./Charts/RevenueChart";
import RevenueByLocation from "./Charts/RevenueByLocation";
import DashboardTable from "./Tables/DashboardTable";
import TotalSalesDonut from "./Charts/TotalSales";

const DashboardContent = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <CardList />
        </Col>
        <Col span={12}>
          <Projections />
        </Col>
        <Col span={16}>
          <RevenueChart />
        </Col>
        <Col span={8}>
          <RevenueByLocation />
        </Col>
        <Col span={16}>
          <DashboardTable />
        </Col>
        <Col span={8}>
          <TotalSalesDonut />
        </Col>
      </Row>
    </>
  );
};

export default DashboardContent;
