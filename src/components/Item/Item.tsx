import { nanoid } from "nanoid";
import { ItemApi } from "../../api/api";
import { Button, Card } from "antd";
import { CustomCard } from "./stylesheets";
import "./stylesheets";

// Interface IS used, but from a different file
interface ItemComponentProps {
  item: ItemApi;
}

export const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
  const { id, title, price, description, category, image, rating } = item;
  const handleClick = () => {
    return alert("Added to cart!");
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

// <li key={id}>
//       {title} ${price}
//     </li>
