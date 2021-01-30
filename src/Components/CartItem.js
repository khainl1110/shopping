import React, {useState, useEffect, useContext} from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';

import MyContext from "../Contexts/MyContext"
export default function CartItem(props){
    var [orderQuantity, setOrderQuantity] = useState(props.order.quantity)
    var [disableDown, setDisableDown] = useState(false)
    var [disableUp, setDisableUp] = useState(false)
    var [cart, setCart] = useContext(MyContext)

    function changeQuantity(e) {
        setOrderQuantity(e.target.value)
    }

    function removeItem(){
        var newCart = [...cart]
        var index = newCart.indexOf(props.order)
        newCart.splice(index,1)
        setCart(newCart)
    }

    useEffect(()=> {
        orderQuantity <=1 ? setDisableDown(true) : setDisableDown(false)
        orderQuantity ===10 ? setDisableUp(true) : setDisableDown(false)
        //not only setting the quantity, we also need to set the price in the context
        var newCart = [...cart]
        var index = newCart.indexOf(props.order)
        newCart[index].subTotal = orderQuantity * props.order.item.price
        console.log(newCart[index].subTotal)
        setCart(newCart)
    },[orderQuantity])

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
                    <button 
                        className = "transparent-bg" 
                        onClick = {() => setOrderQuantity(orderQuantity-1)}
                        disabled = {disableDown}
                    ><AiOutlineArrowDown/> </button>
                    <select value = {orderQuantity} onChange = {changeQuantity}>
                    {
                        [...Array(11)].map((_,i) => 
                            i!==0 && <option value = {i}>{i}</option>)
                    }
                    </select>
                    <button 
                        className = "transparent-bg"
                        onClick = {() => setOrderQuantity(orderQuantity+1)}
                        disabled = {disableUp}
                    ><AiOutlineArrowUp /></button>
                </div>
                <h4>Subtotal: ${orderQuantity * props.order.item.price}</h4>
                <button onClick = {removeItem}>Remove</button>
            </div>
        </div>
    )
}