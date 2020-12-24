import React, {useState, useEffect} from "react";

import MyContext from "../Contexts/MyContext"

import Header from "./Header"
import Order from "./Order";
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
                        <Order order={order}/>)
                }
                </div> :
                <Cart/>
            }
            
           
        </MyContext.Provider>
        
    )
}