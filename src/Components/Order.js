import React, {useState, useContext, useEffect} from "react"

import MyContext from "../Contexts/MyContext"
export default function Order(props){
    var [cart, setCart] = useContext(MyContext)
    var [tempQuantity, setTempQuantity] = useState(1)

    function addItem(){
        var added = false
        cart.map(item => {
            if(item.name===props.order.name) {
                var newCart = [...cart]
                newCart[newCart.indexOf(item)].quantity+=parseInt(tempQuantity)
                setCart(newCart)
                alert("Added!")
                added = true
            }
        })
        if(!added){
            var newCart = [...cart]
            newCart.push({name: props.order.name, quantity: tempQuantity})
            setCart(newCart)
            alert("Added new item!")
        }
    }
    function handleInputChange(e){
        setTempQuantity(e.target.value)
    }
    
    return(
        <div class="m-10">
            <img src={props.order.href} alt={props.order.name} width="300" height="250"/>
            <p>{props.order.name}</p>
            {
                <div className = "horizontal-flex-container">
                    <input type="Number" value={tempQuantity} onChange={handleInputChange}/>
                    <button onClick = {addItem}> Add </button>
                </div>
            }
        </div>
    )
}