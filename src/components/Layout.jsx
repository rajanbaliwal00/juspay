import { Flex, Layout, theme } from "antd";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Sidebar from "./Sidebar/Sidebar";
import SidebarRight from "./Sidebar/SidebarRight";
import CardList from "./Cards/CardList";
import DashboardContent from "./DashboardContent";
import { Route, Routes } from "react-router";
import OrderListTable from "./Tables/OrderListTable";
import { useState } from "react";

const { Header, Content, Sider } = Layout;

const CustomLayout = ({ darkMode, setDarkMode }) => {
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const {
    token: {
      colorBgContainer,
      colorBgLayout,
      borderRadiusLG,
      borderWidthBase,
      borderRightColor,
      layoutFixedWidth,
      paddingSmall,
      paddingLarge,
      paddingXL,
    },
  } = theme.useToken();
  const handleToggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar);
  };
  return (
    <Layout
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        scrollbarGutter: "stable",
      }}
    >
      <Layout>
        <Sider
          width={layoutFixedWidth}
          style={{
            background: colorBgContainer,
            borderRight: `${borderWidthBase} solid ${borderRightColor}`,
            padding: `${paddingLarge} ${paddingSmall}`,
          }}
        >
          <Sidebar />
        </Sider>
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: colorBgLayout,
              borderBottom: `${borderWidthBase} solid ${borderRightColor}`,
              padding: `${paddingLarge} ${paddingXL}`,
            }}
          >
            <Flex justify="space-between" style={{ width: "100%" }}>
              <HeaderLeft />
              <HeaderRight
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onToggleRightSidebar={handleToggleRightSidebar}
              />
            </Flex>
          </Header>
          <Routes>
            {" "}
            <Route
              path="/"
              element={
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <DashboardContent />
                </Content>
              }
            ></Route>
            <Route path="/order-list" element={<OrderListTable />}></Route>
          </Routes>
        </Layout>
        <div
          style={{
            width: showRightSidebar ? layoutFixedWidth : 0,
            transition: "width 0.3s ease-in-out",
            overflow: "hidden",
          }}
        >
          <Sider
            width={layoutFixedWidth}
            style={{
              background: colorBgContainer,
              borderLeft: `${borderWidthBase} solid ${borderRightColor}`,
              transition: "transform 0.3s ease-in-out",
              transform: showRightSidebar
                ? "translateX(0)"
                : `translateX(${layoutFixedWidth}px)`,
              minHeight: "100%",
            }}
          >
            <SidebarRight />
          </Sider>
        </div>
      </Layout>
    </Layout>
  );
};
export default CustomLayout;
