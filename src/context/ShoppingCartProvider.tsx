import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ItemApi } from "../api/api";

// todo, add type
const ShoppingCartContext = createContext<any | null>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  // stateHooks for the selected data
  const [selectedItems, setSelectedItems] = useState<Array<ItemApi>>(
    (JSON.parse(
      localStorage.getItem("selectedItems") ?? "[]"
    ) as ItemApi[]).map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }))
  );
  const [items, setItems] = useState<Array<ItemApi>>([]);

  useEffect(() => {
    console.log("writing");
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems)); // make sure you check the right key
  }, [selectedItems]); // Everytime selected item changes, we will update the whole collection of items

  return (
    <ShoppingCartContext.Provider
      value={{ selectedItems, setSelectedItems, items, setItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// custom hook for using the context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
