import { nanoid } from "nanoid";

interface ItemProps {
  name: string;
  price: number;
}
export type Item = {
  name: string;
  price: number;
};
export const ItemComponent: React.FC<ItemProps> = ({ name, price }) => {
  return (
    <li key={`${name}+${nanoid()}`}>
      {name} ${price}
    </li>
  );
};
