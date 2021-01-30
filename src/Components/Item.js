import React, {useState, useContext, useEffect} from "react"

import MyContext from "../Contexts/MyContext"
export default function Order(props){
    var [cart, setCart] = useContext(MyContext)
    var [tempQuantity, setTempQuantity] = useState(1)

    function addItem(){
        var added = false
            cart.map(order => {
                //if the order name is already inside cart, then alert 'added!'
                if(order.item.name===props.order.name) {
                    var newCart = [...cart]
                    newCart[newCart.indexOf(order)].quantity+=parseInt(tempQuantity)
                    setCart(newCart)
                    alert("Added!")
                    added = true
                }
            })
        
        //if not added, alert "added new item"
        if(!added){
            var newCart = [...cart]
            newCart.push({item: props.order, quantity: tempQuantity})
            setCart(newCart)
            alert("Added new item!")
        }
    }
    function handleInputChange(e){
        setTempQuantity(e.target.value)
    }
    
    return(
        
        <div class="m-10 dynamic-bg">
            <a href="#">
            <img src={props.order.href} alt={props.order.name} width="300" height="250"/>
            <p>{props.order.name}</p>
            <p>Price: ${props.order.price}</p> 
            <p>Unit: {props.order.unit}</p>
            {
                <div className = "horizontal-flex-container">
                    <input type="Number" value={tempQuantity} onChange={handleInputChange}/>
                    <button onClick = {addItem}> Add </button>
                </div>
            }
            </a>
        </div>
        
    )
}