import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InListItem, InBasketItem } from ".";
import Items from "./Items";

export default function ShoppingList() {
  const items = useSelector(state => state.items);

  return (
    <ListGroup className="m-5" variant="flush">
      {items.map((item, index) => {
        return item.inBasket ? (
          <InBasketItem item={item} index={index} />
        ) : (
          <InListItem item={item} index={index} />
        );
      })}
    </ListGroup>
    
  );
}
