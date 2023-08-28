import { useShoppingCart } from "../../context";
import { SelectedItem } from "./SelectedItem";
import { EmptyCart } from "../../widgets/EmptyCart/EmptyCart";
import { ItemApi } from "../../api/api";

export const SelectedItems = () => {
  // We're going to need context
  const { selectedItems } = useShoppingCart();
  return (
    <div>
      {selectedItems && selectedItems?.length > 0 ? (
        <ol>
          {selectedItems.map((item: ItemApi) => (
            <SelectedItem key={item.id} item={item} />
          ))}
        </ol>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
