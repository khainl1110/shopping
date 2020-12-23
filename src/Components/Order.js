import React from "react"
export default function Order(props){
    return(
        <div class="m-10">
            <img src={props.order.href} alt={props.order.name} width="300" height="250"/>
            <p>{props.order.name}</p>
            <button>Add to cart </button>
        </div>
    )
}