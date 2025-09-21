import { ConfigProvider } from "antd";

import { useState } from "react";
import CustomLayout from "./components/Layout";
import { darkTheme } from "./themes/DarkTheme";
import { lightTheme } from "./themes/LightTheme";
import { Routes } from "react-router";
import { Route } from "react-router";
import OrderListTable from "./components/Tables/OrderListTable";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <CustomLayout darkMode={darkMode} setDarkMode={setDarkMode} />
    </ConfigProvider>
  );
}

export default App;
