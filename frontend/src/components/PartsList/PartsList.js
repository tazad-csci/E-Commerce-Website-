import React, { useEffect } from 'react';
import './partList.css';
import CheckoutButton from "../CheckoutModal/CheckoutButton";

export default function PartsList(props) {

    console.log("partslist", props)

    return (
        <div className="parts-list">
            <span className="parts-list-title">
                Parts List
        </span>
            <div className="parts-in-cart">
                {
                    props.items.map(item => {
                        return (
                            <CartItem
                                item={item}
                                setQty={props.set_qty}
                            />

                        )
                    })
                }
            </div>
            <div className="parts-list-totals">
                <div className="parts-list-small parts-list-count-title">Weight:</div>
                <div className="parts-list-small parts-list-counts">{props.weight.toFixed(2)}lbs</div>
                <br />
                <div className="parts-list-small parts-list-count-title">QTY:</div>
                <div className="parts-list-small parts-list-counts">{props.qty}</div>
                <br />
                <div className="parts-list-small parts-list-count-title">SHIPPING:</div>
                <div className="parts-list-small parts-list-counts">${props.shipping.total.toFixed(2)} (${props.shipping.rule.cost}/lbs)</div>
                <br />
                <div className="parts-list-small parts-list-count-title">TOTAL:</div>
                <div className="parts-list-small parts-list-counts">${props.total.toFixed(2)}</div>
                <br />
                <div className="parts-list-small parts-list-count-title">GRAND TOTAL:</div>
                <div className="parts-list-small parts-list-counts">${
                parseFloat( props.total.toFixed(2))+
                parseFloat( props.shipping.total.toFixed(2))}</div>
            </div>
            <div className="parts-list-buttons">
                    <CheckoutButton />
            </div>
        </div>
    );
}


function CartItem(props) {
    console.log("cartitem", props)
    return (
        <div className="parts-list-cart-item">
            <div className="cart-item-img">
                <img
                    src={props.item.part.pictureURL}
                ></img>
            </div>
            <div className="cart-item-text cart-item-name">
                {props.item.part.description}
            </div>
            <div className="cart-item-text cart-item-avail">
                available: {props.item.part.on_hand}
            </div>
            <div className="cart-item-text cart-item-qty">
                qty:
                <input type="number" className="cart-item-input"
                    value={props.item.qty}
                    onChange={e => {
                        if (e.target.value > 0 && e.target.value <= props.item.part.on_hand)
                            props.setQty(props.item.part, e.target.value)
                    }}>
                </input>
                <span style={{ borderBottom: "1px solid black", cursor: "pointer" }}
                    onClick={
                        () => props.setQty(props.item.part, 0)
                    }
                >
                    remove item
                </span>
            </div>
            <div className="cart-item-text cart-item-price">
                {props.item.qty} @ {props.item.part.weight}lbs = {(props.item.qty * props.item.part.weight).toFixed(2)}lbs
                        </div>
            <div className="cart-item-text cart-item-price">
                {props.item.qty} @ ${props.item.part.price} = ${(props.item.qty * props.item.part.price).toFixed(2)}
            </div>
        </div>
    )
}