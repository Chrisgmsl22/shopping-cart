import { Card, Typography } from "antd";
import { Navbar } from "../Navbar";
import { ItemApi } from "../../api/api";
import { EmptyCart } from "../../widgets/EmptyCart";
import { useShoppingCart } from "../../context";
import { SelectedItems } from "./SelectedItems";
import { styled } from "styled-components";
const { Title, Paragraph } = Typography;

const SpacerCard = styled(Card)`
  gap: 3rem;
`;

export const TotalPage = () => {
  // We access the context
  const { selectedItems } = useShoppingCart();

  return (
    <>
      <Navbar />
      <SpacerCard title="Total of your shopping cart">
        <Paragraph>Total of your cart {selectedItems?.length}</Paragraph>
        {/* Here we render the selectedItems component */}
        <SelectedItems />
      </SpacerCard>
    </>
  );
};
