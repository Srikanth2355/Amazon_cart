import React from 'react'
import "./CartItem.css"

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://images.samsung.com/is/image/samsung/in-galaxy-tab-s7-plus-t975-sm-t975nzkainu-frontmysticblack-290447973?$720_576_PNG$" alt="s7" />
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Samsung Galaxy Tab S7+</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className='item-actions'>
                    <div className="item-quantity">
                        <select>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                        </select>
                    </div>
                    <div className="item-actions-divider">|</div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                Rs.70,000
            </div>
        </div>
    )
}

export default CartItem
