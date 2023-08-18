import { ItemApi } from "../../api/api";
import { Button, Typography } from "antd";
import { CustomButton, CustomCard } from "./stylesheets";
import "./stylesheets";

// Interface IS used, but from a different file
interface ItemComponentProps {
  item: ItemApi;
  onAddToCart: (item: ItemApi) => void;
}

export const ItemComponent: React.FC<ItemComponentProps> = ({
  item,
  onAddToCart,
}) => {
  const { id, title, price, description, category, image, rating } = item;
  const { Title, Paragraph } = Typography;
  const handleClick = () => {
    onAddToCart(item);
    alert(`${item.title} was added to the Cart`);
  };

  return (
    <CustomCard
      hoverable
      style={{ width: "240" }}
      cover={<img src={image} alt={title} className="image" />}
    >
      <Title level={3}>{title}</Title>
      <Paragraph>Price: ${price}</Paragraph>
      <Paragraph>Category: {category}</Paragraph>
      <Paragraph>Rating: {rating.rate}</Paragraph>
      <Paragraph className="description">Description: {description}</Paragraph>
      <CustomButton onClick={handleClick} type="primary">
        Add to Cart
      </CustomButton>
    </CustomCard>
  );
};
