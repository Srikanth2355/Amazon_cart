import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';

function CartItems( { items }) {
    return (
      <div className="cartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
        {items.map((item, index)=> 
          <CartItem key={index} item={item} />
        )}
        </div>
      </div>
    )
}

export default CartItems
