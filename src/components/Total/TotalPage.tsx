import { Typography } from "antd";
import { Navbar } from "../Navbar";
import { ItemApi } from "../../api/api";
import { useLocation } from "react-router-dom";
import { EmptyCart } from "../../widgets/EmptyCart";
const { Title, Paragraph } = Typography;

export const TotalPage = () => {
  const location = useLocation();
  const items = location.state?.items as Array<ItemApi>;
  console.warn("Total component, selected ", items);
  return (
    <>
      <Navbar />
      <Title level={1}>Total of your shopping cart</Title>
      <Paragraph>Total of items {items?.length}</Paragraph>
      {items && items?.length > 0 ? (
        <ol>
          {items.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ol>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
