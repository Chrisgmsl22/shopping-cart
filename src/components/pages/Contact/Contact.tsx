import { Typography } from "antd";
import { Navbar } from "../../Navbar";

export const Contact = () => {
  const { Title } = Typography;
  return (
    <>
      <Navbar />

      <Title level={1}>Contact</Title>
    </>
  );
};
