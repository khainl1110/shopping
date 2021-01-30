import React, {useContext, useState, useEffect} from "react"

import MyContext from "../Contexts/MyContext"
import CartItem from "./CartItem"
export default function Cart(props){
    var [cart]  = useContext(MyContext)
    var [total, setTotal] = useState(0)

    useEffect(() => {
        var tempTotal = 0
        cart.map(order => tempTotal += parseInt(order.subTotal))
        setTotal(tempTotal)
    },[cart])

    return(
        <div>
            <div className="orders-container">
                {
                    
                    cart.map(order => <CartItem order = {order} />)
                }
            </div>
            <h2>Total ${total}</h2>
            <button onClick={() => alert("Thanks for buying!")}>Buy</button>
        </div>
    )
}