import { ItemApi } from "../../api/api";
import { ItemComponent } from "../Item/Item";
import { Button } from "antd";
import { ItemsContainer } from "./stylesheets";
import { useState } from "react";
import { Items as _Items } from "../../types";

export const Items = ({ items }: _Items) => {
  // Here we add the selected items

  return (
    <ItemsContainer>
      {items.map((item) => {
        return <ItemComponent key={item.id} item={item} />;
      })}
    </ItemsContainer>
  );
};
