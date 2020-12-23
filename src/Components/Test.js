import React, {useContext} from "react"
import MyContext from "../Contexts/MyContext"
export default function Test(props){
    var data = useContext(MyContext)
    return(
        <div>
            {
                (data==="testing") ? <h2>Testing succeeded!</h2> : <h2>Testing failed</h2>
            }
        </div>
    )
}