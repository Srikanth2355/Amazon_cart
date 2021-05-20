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
                    <h2>Samsung Galaxy TAb S7+</h2>
                </div>
                <div className="info-stock">
                    In stock
                </div>
                <div className='item-actions'>
                    <div className="item-quantity">

                    </div>
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
