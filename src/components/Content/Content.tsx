import { useEffect, useState } from "react";
import { Items } from "../Items";
import { ItemApi, fetchItems } from "../../api/api";

export const Content = () => {
  // We need a state for the items
  const [items, setItems] = useState<ItemApi[]>([]); // Initialiced as an empty array

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
      <h1>Here we are going to list the elements</h1>
      <Items items={items} />
    </>
  );
};
