import { Typography } from "antd";
import { Navbar } from "../../Navbar";

export const Catalog = () => {
  const { Title } = Typography;
  return (
    <>
      <Navbar />

      <Title level={1}>Catalog</Title>
    </>
  );
};
