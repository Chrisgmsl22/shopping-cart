import { useEffect, useState } from "react";
import { Items } from "../Items";
import { ItemApi, fetchItems } from "../../api/api";
import { Typography } from "antd";
import { ShoppingIcon } from "../ShoppingIcon";
import { Navbar } from "../Navbar";
import { useShoppingCart } from "../../context";

const { Title } = Typography;

export const Content = () => {
  // Using my context provider
  const { selectedItems, items, setItems } = useShoppingCart();

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
      <Navbar />
      <Title>Welcome to Shoppy</Title>
      <ShoppingIcon items={selectedItems} />
      <Items items={items} />
    </>
  );
};
