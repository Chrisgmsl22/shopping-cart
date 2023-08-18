import { useEffect, useState } from "react";
import { Items } from "../Items";
import { ItemApi, fetchItems } from "../../api/api";
import { Typography } from "antd";
import { ShoppingIcon } from "../ShoppingIcon";
import { Navbar } from "../Navbar";

const { Title } = Typography;

export const Content = () => {
  // We need a state for the items
  const [items, setItems] = useState<ItemApi[]>([]); // Initialiced as an empty array
  const [selectedItems, setSelectedItems] = useState<Array<ItemApi>>(
    JSON.parse(localStorage.getItem("selectedItems") ?? "[]")
  ); // Empty array for now

  const handleAddToCart = (item: ItemApi) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };
  const fetchItemsFromApi = async () => {
    const fetchedItems = await fetchItems(); // we use our custom function
    setItems(fetchedItems); // update the state
  };

  // First, we load items from localStorage on componentMount
  useEffect(() => {
    fetchItemsFromApi(); // constantly call this while page loads
  }, []);

  // Then we store selected items in localStorage whenever it changes
  useEffect(() => {
    console.log("useEffect", selectedItems.length);
    // set the selected items
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]); // itll be observing the selected items

  console.log("DEBUG fetchedItems ", items);
  return (
    <>
      <Navbar items={selectedItems} />
      <Title>Welcome to Shoppy</Title>
      <ShoppingIcon items={selectedItems} />
      <Items items={items} onAddToCart={handleAddToCart} />
    </>
  );
};
