import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';

function CartItems( { items, setcartItems }) {
  const changeItemQuantity = (e, index) => {
    const newitems = [...items];
    newitems[index].quantity = Number(e.target.value);
    setcartItems(newitems);
  }
    return (
      <div className="cartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
        {items.map((item, index)=> 
          <CartItem index={index} key={index} item={item} changeItemQuantity={changeItemQuantity} />
        )}
        </div>
      </div>
    )
}

export default CartItems
