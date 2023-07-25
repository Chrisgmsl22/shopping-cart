import { Item, ItemComponent } from "../Item/Item";

interface ItemsProps {
  items: Array<Item>;
}

export const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <ItemComponent name={item.name} price={item.price} />;
      })}
    </ul>
  );
};
