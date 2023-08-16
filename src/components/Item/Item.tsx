import { ItemApi } from "../../api/api";
import { Button } from "antd";
import { CustomCard } from "./stylesheets";
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
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <p>Rating: {rating.rate}</p>
      <p className="description">Description: {description}</p>
      <Button onClick={handleClick} type="primary">
        Add to Cart
      </Button>
    </CustomCard>
  );
};
