import React, {useState, useEffect} from "react";

import MyContext from "../Contexts/MyContext"

import Test from "./Test";

export default function Main(props){
    var [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch("https://quiet-everglades-39046.herokuapp.com/orders")
            .then(response => response.json())
            .then(res => {
                setOrders(res)
            }) 
    },[])

    return(
        <MyContext.Provider value={"testing"}>
            {
                orders.map(order => 
                    <img src={order.href} alt="Food" width="250" height="300"/>)
            }
            <Test/>
        </MyContext.Provider>
        
    )
}