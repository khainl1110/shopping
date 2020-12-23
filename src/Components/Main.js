import React, {useState, useEffect} from "react";

import MyContext from "../Contexts/MyContext"

import Header from "./Header"
import Test from "./Test";
import Order from "./Order";

import "../Main.css"

export default function Main(props){
    var [orders, setOrders] = useState([])
    var [cart, setCart] =  useState(new Map())
    var [name, setName] = useState("Khai")
    useEffect(() => {
        fetch("https://quiet-everglades-39046.herokuapp.com/orders")
            .then(response => response.json())
            .then(res => {
                setOrders(res)
            }) 
    },[])

    return(
        <MyContext.Provider value={[name, setName]}>
            <Header/>
            <div className="container">
                {
                    orders.map(order => 
                        <Order order={order}/>)
                }
            </div>
            <Test/>
        </MyContext.Provider>
        
    )
}