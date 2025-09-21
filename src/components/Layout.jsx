import { Flex, Layout, theme } from "antd";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Sidebar from "./Sidebar/Sidebar";
import SidebarRight from "./Sidebar/SidebarRight";
import DashboardContent from "./DashboardContent";
import OrderListTable from "./Tables/OrderListTable";
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";

const { Header, Content, Sider } = Layout;

const CustomLayout = ({ darkMode, setDarkMode }) => {
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
      colorPrimary, // used for svg fill
    },
  } = theme.useToken();

  // Listen for window size changes to adjust the layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleRightSidebar = () => {
    setShowRightSidebar((prev) => !prev);
  };

  const handleToggleLeftSidebar = () => {
    setShowLeftSidebar((prev) => !prev);
  };

  const mobileLeftSidebar = (
    <>
      {showLeftSidebar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            padding: "1rem",
            background: colorBgContainer,
            zIndex: 1000,
            transform: showLeftSidebar
              ? "translateX(0)"
              : `translateX(-${layoutFixedWidth}px)`,
            transition: "transform 0.3s ease-in-out",
            boxShadow: showLeftSidebar ? "2px 0 8px rgba(0,0,0,0.15)" : "none",
          }}
        >
          {/* Clickable Cross Button to Close Left Sidebar */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleToggleLeftSidebar}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleToggleLeftSidebar();
            }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "8px",
              cursor: "pointer",
            }}
            aria-label="Close left sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="16"
                y1="4"
                x2="4"
                y2="16"
                stroke={colorPrimary}
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="4"
                x2="16"
                y2="16"
                stroke={colorPrimary}
                strokeWidth="2"
              />
            </svg>
          </div>
          <Sidebar />
        </div>
      )}
    </>
  );

  // --- Desktop Left Sidebar (Static) ---
  const desktopLeftSidebar = (
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
  );

  // --- Right Sidebar definitions (existing implementation) ---
  const mobileRightSidebar = (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "100%",
        padding: "1rem",
        background: colorBgContainer,
        zIndex: 1000,
        transform: showRightSidebar ? "translateX(0)" : `translateX(100%)`,
        transition: "transform 0.3s ease-in-out",
        boxShadow: showRightSidebar ? "-2px 0 8px rgba(0,0,0,0.15)" : "none",
      }}
    >
      {/* Cross Button */}
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "8px" }}
      >
        <svg
          onClick={handleToggleRightSidebar}
          style={{ cursor: "pointer" }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Close right sidebar"
        >
          <line
            x1="4"
            y1="4"
            x2="16"
            y2="16"
            stroke={colorPrimary}
            strokeWidth="2"
          />
          <line
            x1="16"
            y1="4"
            x2="4"
            y2="16"
            stroke={colorPrimary}
            strokeWidth="2"
          />
        </svg>
      </div>
      <SidebarRight onSelect={handleToggleRightSidebar} />
    </div>
  );

  const desktopRightSidebar = (
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
  );

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
        {isMobile ? mobileLeftSidebar : desktopLeftSidebar}
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
              <HeaderLeft handleToggleLeftSidebar={handleToggleLeftSidebar} />
              <HeaderRight
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onToggleRightSidebar={handleToggleRightSidebar}
              />
            </Flex>
          </Header>
          <Routes>
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
        {isMobile ? mobileRightSidebar : desktopRightSidebar}
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
