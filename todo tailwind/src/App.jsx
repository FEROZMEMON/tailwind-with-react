import { useState } from "react"


export default function App() {
  let [text , setText] = useState()
  let [array , setArray] = useState([])
  function Addtodo(event){
    event.preventDefault()
    console.log(text);
    array.push(text)
    setArray(array)
    setText('')

  }
  function deleteTodo(index){
    console.log(index);
    const newarray = [...array]
    newarray.splice(index , 1)
    setArray(newarray)

  }
  function editTodo(index){
    console.log(index);
    const newvalue = prompt('enter new todo')
    const newarray = [...array]
    newarray[index] = newvalue
    setArray(newarray)

  }




  return( 
      <>
    <nav className="flex justify-between bg-slate-600 font-bold pt-3 pb-3">
      <div>
        <h1 >todo app</h1>
      </div>

      <div className="">
        <ul className="flex gap-3">
          <li>home</li>
          <li>login</li>
          <li>signup</li>
        </ul>

      </div>
</nav>

 <form onSubmit={Addtodo} >
   <input type="text" placeholder="enter your todo" onChange={(e)=>setText(e.target.value)} value={text} />
   <button type="submit">Add todo</button>
 </form>
 {array.map((item , index)=>{
  return  <ul>
    <li>{item}
     <button onClick={()=> deleteTodo(index)}>delete</button>
     <button onClick={()=> editTodo(index)}>edit</button></li>
   </ul>
 })}
   
 </>  


  )}
