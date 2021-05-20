import React from 'react';
import './CartTotal.css';
import NumberFormat from 'react-number-format';
function CartTotal({ items }) {
    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item)=> {
            total += (item.price * item.quantity);
        })
        return total;
    }
    const getTotalQuantity = () => {
        let totalquantity = 0;
        items.forEach((item)=> {
            totalquantity += item.quantity;
        })
        return totalquantity;
    }
    return (
        <div className="cartTotal">
            <h3>Subtotal({getTotalQuantity()} items):<span className="cartTotal-price">
            <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </span></h3>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default CartTotal
