import { Item } from "../Item";
import { Items } from "../Items";

export const Content = () => {
  const items: Array<Item> = [
    { name: "iPhone", price: 100 },
    { name: "Keyboard", price: 200 },
    { name: "Mouse", price: 75 },
    { name: "PS5", price: 750 },
  ];
  return (
    <>
      <h1>Here we are going to list the elements</h1>
      <Items items={items} />
    </>
  );
};
