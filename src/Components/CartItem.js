import React from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa'
export default function CartItem(props){
    return(
        <div className="order-container dynamic-bg">
            <div>
                <h3>{props.order.item.name}</h3>
                <img src = {props.order.item.href} width = "100" height = "100"/>
            </div>

            <div>
                <p>Price: ${props.order.item.price} per {props.order.item.unit}</p>
                <p>Quantity:</p>
                <div className="quantity-control">
                    <button className = "transparent-bg"><AiOutlineArrowUp /></button>
                    <p>{props.order.quantity}</p>
                    <button className = "transparent-bg"><AiOutlineArrowDown/> </button>
                </div>
                
            </div>
        </div>
    )
}