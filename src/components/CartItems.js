import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';

function CartItems( { items, setcartItems }) {
  const changeItemQuantity = (e, index) => {
    //duplicates the items and stores in newitems
    const newitems = [...items];
    newitems[index].quantity = Number(e.target.value);
    setcartItems(newitems);
  }
  const deleteItem = (indexToDelete)=> {
    const newitems = items.filter((item, index)=> {
      return index !== indexToDelete;
    })
    setcartItems(newitems);
  }
    return (
      <div className="cartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
        {items.map((item, index)=> 
          <CartItem index={index} key={index} item={item} changeItemQuantity={changeItemQuantity} deleteItem={deleteItem} />
        )}
        </div>
      </div>
    )
}

export default CartItems
