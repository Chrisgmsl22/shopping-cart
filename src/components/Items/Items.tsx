import { ItemApi } from "../../api/api";
import { ItemComponent } from "../Item/Item";
import { Button } from "antd";
import { ItemsContainer } from "./stylesheets";

interface ItemsProps {
  // every new component that receives information, needs to have its own props declaration
  items: ItemApi[];
}

export const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <ItemsContainer>
      {items.map((item) => {
        console.log("map item", item);
        return <ItemComponent key={item.id} item={item} />;
      })}
    </ItemsContainer>
  );
};
