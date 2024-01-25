import React from "react";
import './app1.css';

function PropsState(props){
    const attr={
        "color": "green"
    }
    return(
       <div style={{"color":"red"}}>
        <h1 style={attr}>This is Props Component</h1>
        <h2>hello I am {props.name},I m {props.age} years old</h2>
       </div>
    );
}
export default PropsState;