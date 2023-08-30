import { ItemApi } from "../../api/api";
import { Button, Typography } from "antd";
import { CustomButton, CustomCard } from "./stylesheets";
import "./stylesheets";
import { useShoppingCart } from "../../context";
import { Item } from "../../types";
import { useNavigate } from "react-router-dom";

// Interface IS used, but from a different file
interface ItemComponentProps extends Item {
  onAddToCart?: (item: ItemApi) => void;
}

export const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
  const { id, title, price, description, category, image, rating } = item;
  const { setSelectedItems } = useShoppingCart();
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();

  const handleClick = (item: ItemApi) => {
    setSelectedItems((prevItems: Array<ItemApi>) => [...prevItems, item]);
    alert(`${item.title} was added to the Cart`);
  };

  // const handleCardClick = (item: ItemApi) => {
  //   navigate(`/all-products/${item.id}`)
  // }

  return (
    //TODO: add onClick event for each card and redirect to a new page for the item selected
    <CustomCard
      hoverable
      style={{ width: "240" }}
      cover={<img src={image} alt={title} className="image" />}
      onClick={() => navigate(`/all-products/${id}`)}
    >
      <Title level={3}>{title}</Title>
      <Paragraph>Price: ${price}</Paragraph>
      <Paragraph>Category: {category}</Paragraph>
      <Paragraph>Rating: {rating.rate}</Paragraph>
      <Paragraph className="description">Description: {description}</Paragraph>
      <CustomButton onClick={() => handleClick(item)} type="primary">
        Add to Cart
      </CustomButton>
    </CustomCard>
  );
};
