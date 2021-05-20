import React from 'react';
import './CartTotal.css';

function CartTotal({ items }) {
    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item)=> {
            total += (item.price * item.quantity);
        })
        return total;
    }
    return (
        <div className="cartTotal">
            <h3>Subtotal({items.length} items):<span className="cartTotal-price">${getTotalPrice()}</span></h3>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default CartTotal
