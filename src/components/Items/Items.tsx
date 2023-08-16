import { ItemApi } from "../../api/api";
import { ItemComponent } from "../Item/Item";
import { Button } from "antd";
import { ItemsContainer } from "./stylesheets";
import { useState } from "react";

type ItemsProps = {
  // every new component that receives information, needs to have its own props declaration
  items: ItemApi[];
  onAddToCart: (item: ItemApi) => void;
};

export const Items = ({ items, onAddToCart }: ItemsProps) => {
  // Here we add the selected items

  return (
    <ItemsContainer>
      {items.map((item) => {
        return (
          <ItemComponent key={item.id} item={item} onAddToCart={onAddToCart} />
        );
      })}
    </ItemsContainer>
  );
};
