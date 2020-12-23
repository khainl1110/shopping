import React, {useContext} from "react"
import MyContext from "../Contexts/MyContext"
export default function Test(props){
    var [name,setName] = useContext(MyContext)
    return(
        <div>
            {
                (name==="Khai") ? <h2>Testing succeeded!</h2> : <h2>Testing failed</h2>
                
            }
            <h3>{name}</h3>
            <button onClick={()=> setName("haha")}> Change name</button>
        </div>
    )
}