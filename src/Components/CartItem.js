import React, {useState} from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';
export default function CartItem(props){
    var [orderQuantity, setOrderQuantity] = useState(props.order.quantity)

    function changeQuantity(e) {
        setOrderQuantity(e.target.value)
    }
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
                    <select value = {orderQuantity} onChange = {changeQuantity}>
                    {
                        [...Array(10)].map((_,i) => 
                            <option value = {i}>{i}</option>)
                    }
                    </select>
                    <button className = "transparent-bg"><AiOutlineArrowDown/> </button>
                </div>
                <h4>Subtotal: ${orderQuantity * props.order.item.price}</h4>
            </div>
        </div>
    )
}