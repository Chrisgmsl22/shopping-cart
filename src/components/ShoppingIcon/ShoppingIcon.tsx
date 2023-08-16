import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { StickyButton } from "./stylesheets";
import { ItemApi } from "../../api/api";

interface ShoppingIconProps {
  items: ItemApi[];
}

export const ShoppingIcon = ({ items }: ShoppingIconProps) => {
  console.log("SELECTED ITEMS on icon ", items.length);

  return (
    <StickyButton>
      <Badge count={items.length}>
        <Button size="large" icon={<ShoppingCartOutlined />} onClick={() => {}}>
          Total
        </Button>
      </Badge>
    </StickyButton>
  );
};
