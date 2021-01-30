import React, {useState, useEffect} from "react";

import MyContext from "../Contexts/MyContext"

import Header from "./Header"
import Item from "./Item";
import Cart from "./Cart";

import "../Main.css"

export default function Main(props){
    var [orders, setOrders] = useState([])
    var [cart, setCart] =  useState([])
    var [screen, setScreen] = useState(0)

    useEffect(() => {
        fetch("https://quiet-everglades-39046.herokuapp.com/orders")
            .then(response => response.json())
            .then(res => {
                setOrders(res)
                //do this after the previous cart because the orders might not been set
                var newCart = [...cart]
                newCart.push({item: res[0],quantity: 2, subTotal: res[0].price *2})
                newCart.push({item: res[3], quantity: 3, subTotal: res[3].price * 3})
                setCart(newCart)
            })
    },[])

    return(
        <MyContext.Provider value={[cart, setCart]}>
            <Header/>
            <nav>
                <li><a href="#" onClick={() => setScreen(0)}>Market</a></li>
                <li><a href="#" onClick={() => setScreen(1)}>Your cart</a></li>
            </nav>

            {
                (screen === 0) ? 
                <div className="container">
                {
                    orders.map(order => 
                        <Item order={order}/>)
                }
                </div> :
                <Cart/>
            }
            
           
        </MyContext.Provider>
        
    )
}