import React from "react";

class SetStatee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count : props.count
        }
    }
   CountIncrement=()=>{
    this.setState({
        count: this.state.count+1
    })
   }
   CountDecrement=()=>{
    this.setState({
        count: this.state.count-1
    })
   }
   CountReset=()=>{
    this.setState({
        count:this.props.count
    })
   }

       render(){
        return(
            <div>
            <h1>Count:{this.state.count} </h1>
           <button onClick={this.CountIncrement}>Increment</button>
           <button onClick={this.CountDecrement}>Decrement</button>
           <button onClick={this.CountReset}>Reset</button>
           </div>
        )
}
}
export default SetStatee;