import React, {useContext} from "react"

import MyContext from "../Contexts/MyContext"
export default function Cart(props){
    var [cart, setCart]  = useContext(MyContext)
    return(
        <div>
            <p>This is your cart</p>
            {
                cart.map(item =>
                    <p>{item.name}, quality, {item.quantity}</p>)
            }
        </div>
    )
}