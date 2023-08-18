import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { StickyButton } from "./stylesheets";
import { ItemApi } from "../../api/api";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ShoppingIconProps {
  items: ItemApi[];
}

export const ShoppingIcon = ({ items }: ShoppingIconProps) => {
  console.log("SELECTED ITEMS on icon ", items.length);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTotalClick = () => {
    // We change routes and pass the initial state that we have
    navigate("total", { state: { items: items } });
  };

  return (
    <StickyButton>
      <Badge count={items.length}>
        <Button
          size="large"
          icon={<ShoppingCartOutlined />}
          onClick={handleTotalClick}
        >
          Total
        </Button>
      </Badge>
    </StickyButton>
  );
};
