import { Button, Typography } from "antd";
import { Item } from "../../types";
import { ItemCard, ItemContent, ItemImage } from "./stylesheets";
import { useShoppingCart } from "../../context";
import { ItemApi } from "../../api/api";
export const SelectedItem = ({ item }: Item) => {
  const { Text } = Typography;
  const { selectedItems, setSelectedItems } = useShoppingCart();

  console.log("pageload", selectedItems);
  const handleIncrease = () => {
    const updatedItems: ItemApi = selectedItems.map((selectedItem: ItemApi) =>
      selectedItem.id === item.id
        ? {
            ...selectedItem,
            quantity: selectedItem.quantity ? selectedItem.quantity + 1 : 1,
          }
        : selectedItem
    );

    setSelectedItems(updatedItems);
    console.log("DEBUG after plusButton: ", updatedItems);
  };

  const handleDecrease = () => {
    const updatedItems = selectedItems.map((selectedItem: ItemApi) =>
      selectedItem.id === item.id
        ? {
            ...selectedItem,
            quantity: selectedItem.quantity ? selectedItem.quantity - 1 : 0,
          }
        : selectedItem
    );
    setSelectedItems(updatedItems);
    console.log("DEBUG after minusButton: ", selectedItems);
  };
  return (
    <ItemCard
      type="inner"
      //Todo item counter added
      title={`${item.title}`}
      hoverable
      bordered
      extra={`$${item.price}`}
    >
      <ItemContent>
        <ItemImage src={item.image} alt={item.title} />
        <Text>{item.description}</Text>
        <Button onClick={handleIncrease}>+</Button>
        {item.quantity}
        <Button onClick={handleDecrease} disabled={item.quantity === 0}>
          -
        </Button>
      </ItemContent>
    </ItemCard>
  );
};
