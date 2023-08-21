import { Typography } from "antd";
import { Navbar } from "../../Navbar";

export const Contact = () => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Navbar />

      <Title level={1}>Contact</Title>
      <Paragraph>
        My name is Christian Gonzalez, I'm a Junior Software Engineer focused on
        Web Development, specially Front End, I am currently working at{" "}
        <a href="https://www.hireborderless.com" target="_blank">
          Borderless
        </a>{" "}
        And I want to help humanity as much as possible with my knowledge and
        contribute with my creations.
      </Paragraph>
    </>
  );
};
