import "./App.css";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content/Content";
import { Outlet } from "react-router-dom";
import { Typography } from "antd";

const Root = () => {
  const { Title } = Typography;
  return (
    <>
      <Navbar />
      <Title level={1}>Welcome to Shoppy</Title>

      <Outlet />
    </>
  );
};

export default Root;
