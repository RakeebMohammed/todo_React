import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  const [Error, setError] = useState(false)
  const checkValid=()=>{
    console.log(toDo);
if(toDo){
  setError(false)

    setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])
    setTodo('')
}   
else{
setError(true)
} 
  }
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo } onChange={(e)=>
      
        setTodo(e.target.value)}
 type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
            //setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])
          checkValid()}} className="fas fa-plus"></i>
     </div>
     {Error && <span>Cannot be empty</span>}
      
      <div className="todos">
        {
          toDos.map((val)=>{
return(
         
          <div className="todo">
          <div className="left">
            <input 
            checked={val.status} onChange={(e)=>{

           console.log(e.target.checked);
           console.log(val);
              setTodos(toDos.filter(obj=>{
              if(obj.id===val.id){
              obj.status=e.target.checked
              }
              return obj
            })) }} type="checkbox" name="" id="" />
            <p>{val.text}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setTodos(toDos.filter(del=>{
                let temp
                if(val.id!==del.id){
                  
                  temp=del
                 }
                 else{
                  val.status=false
                 }
                return temp

              }))
            }}
            className="fas fa-times"></i>
          </div>
        </div>)
         })}
      </div>
    </div>
  );
}

export default App;