import { Typography } from "antd";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  // we retrieve the error
  const error = useRouteError();
  const { Title, Paragraph } = Typography;
  console.log(error);
  return (
    <div>
      <Title level={1}>Sorry!</Title>
      <Paragraph>This page was not found</Paragraph>

      <Paragraph>
        Click <Link to="/">Here</Link> to get back to main page
      </Paragraph>
    </div>
  );
};
