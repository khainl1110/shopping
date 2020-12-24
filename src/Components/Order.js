import React, {useContext} from "react"

import MyContext from "../Contexts/MyContext"
export default function Order(props){
    var [cart, setCart] = useContext(MyContext)

    function addItem(){
        var added = false
        cart.map(item => {
            if(item.name===props.order.name) {
                var newCart = [...cart]
                newCart[newCart.indexOf(item)].quantity+=1
                setCart(newCart)
                alert("Added!")
                added = true
            }
        })
        if(!added){
            var newCart = [...cart]
            newCart.push({name: props.order.name, quantity: 1})
            setCart(newCart)
            alert("Added!")
        }
    }
    return(
        <div class="m-10">
            <img src={props.order.href} alt={props.order.name} width="300" height="250"/>
            <p>{props.order.name}</p>
            <button onClick={addItem}>Add to cart </button>
        </div>
    )
}