import { useEffect, useState } from "react";
import { Items } from "../Items";
import { ItemApi, fetchItems } from "../../api/api";
import { Typography } from "antd";
import { ShoppingIcon } from "../ShoppingIcon";

const { Title } = Typography;

export const Content = () => {
  // We need a state for the items
  const [items, setItems] = useState<ItemApi[]>([]); // Initialiced as an empty array
  const [selectedItems, setSelectedItems] = useState<Array<ItemApi>>([]); // Empty array for now

  const handleAddToCart = (item: ItemApi) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    const fetchItemsFromApi = async () => {
      const fetchedItems = await fetchItems(); // we use our custom function
      setItems(fetchedItems); // update the state
    };

    fetchItemsFromApi(); // constantly call this while page loads
  }, []);

  console.log("DEBUG fetchedItems ", items);
  return (
    <>
      <Title>Welcome to Shoppy</Title>
      <ShoppingIcon items={selectedItems} />
      <Items items={items} onAddToCart={handleAddToCart} />
    </>
  );
};
