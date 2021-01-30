import React, {useContext, useEffect} from "react"

import MyContext from "../Contexts/MyContext"
import CartItem from "./CartItem"
export default function Cart(props){
    var [cart, setCart]  = useContext(MyContext)

    return(
        <div>
            <div className="orders-container">
                {
                    cart.map(order => <CartItem order = {order} />)
                }
            </div>
            <button onClick={() => alert("Thanks for buying!")}>Buy</button>
        </div>
    )
}