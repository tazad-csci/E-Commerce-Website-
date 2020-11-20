import React, { useEffect } from 'react';
import './partList.css';

export default function PartsList(props) {

    console.log(props)

    var total_cart = 0;
    props.items.forEach(item => {
        total_cart+= item.price; //TODO: handle QTY
    });
    total_cart = total_cart.toFixed(2);

  return (
    <div className="parts-list">
        <span className="parts-list-title">
            Parts List
        </span>
        <div className="parts-in-cart">
            {
                props.items.map(item=>{
                    return (
                        <CartItem 
                        item={item}
                        />

                    )
                })
            }
        </div>
        <div className="parts-list-totals">
            <div className="parts-list-small parts-list-count-title">QTY:</div>
            <div className="parts-list-small parts-list-counts">{props.items.length}</div>
            <br/>
            <div className="parts-list-small parts-list-count-title">TOTAL:</div>
            <div className="parts-list-small parts-list-counts">${total_cart}</div>
        </div>
        <div className="parts-list-buttons">
            <div className="parts-list-button">
                Checkout
            </div>
        </div>
    </div>
  );
}


function CartItem(props){
    return (
        <div style={{width: "100%", backgroundColor: "#AAA", marginTop: "15px"}}>
            <img 
            style={{maxHeight: "100%", margin: "5px"}}
            src={props.item.pictureURL}></img>
            {props.item.description}
            /
            {props.item.number}
        </div>
    )
}