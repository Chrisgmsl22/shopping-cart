import { Typography } from "antd";
import { Navbar } from "../Navbar";
import { ItemApi } from "../../api/api";
import { useLocation } from "react-router-dom";
import { EmptyCart } from "../../widgets/EmptyCart";
import { useShoppingCart } from "../../context";
const { Title, Paragraph } = Typography;

export const TotalPage = () => {
  // We access the context
  const { selectedItems, setSelectedItems } = useShoppingCart();

  return (
    <>
      <Navbar />
      <Title level={1}>Total of your shopping cart</Title>
      <Paragraph>Total of selectedItems {selectedItems?.length}</Paragraph>
      {selectedItems && selectedItems?.length > 0 ? (
        <ol>
          {selectedItems.map((item: ItemApi) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ol>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
