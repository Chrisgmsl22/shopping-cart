import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { StickyButton } from "./stylesheets";
import { useNavigate } from "react-router-dom";
import { Items } from "../../types";

export const ShoppingIcon = ({ items }: Items) => {
  console.log("SELECTED ITEMS on icon ", items.length);
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
