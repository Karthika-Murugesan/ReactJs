// import {useReducer} from 'react';
// const initialState={count:0};
// function countFunc(state,action){
//     if(action.type=="sub"){
//         return{count:state.count+1}
//     }
//     else if(action.type=="add"){
//         return{count:state.count-1}
//     }
// }




// const Login=()=>{

//     const[state,dispatch]=useReducer(countFunc,initialState);
//     return(
//         <div>
//             <h1>This is useReducer Example</h1>
//             <h1>Count:0</h1>
//             {<button onClick={()=>dispatchEvent({type:'sub'})}>Subtract</button>}
//             Count:{state.count}
//             {<button onClick={()=>dispatchEvent({type:'add'})}>Add</button>}
//             <button onClick={()=>dispatchEvent({type:'reset'})}>Reset</button>

//             <h1>Login if you already Registered</h1>
//         </div>
//     )

    
// }
// export default Login;