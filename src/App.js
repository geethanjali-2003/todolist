import React,{useState} from 'react';
import AddTodo from './MyComponent/AddTodo';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/Header';
import Todolist from './MyComponent/Todolist';

function App() {

  const onDelete=(todo)=>{
    console.log("I am Deleted!"+todo)

    setTodos(todos.filter((e)=>{
      return e!== todo
    }))
  }

  // created addlist function with two arguments
  const addlist=(title,desc)=>{
  console.log("Adding post" + title + desc)

  const mytodo={
    title:title,
    desc:desc
  }
  setTodos([...todos,mytodo])
  }

// const [name,setName]=useState("")
  const [todos, setTodos]=useState([
    {
      srno:1,
      title:"Learn React",
      desc:"Please practice Reactjs and watch the recordings"
    },

    {
      srno:2,
      title:"Microservice",
      desc:"Go through and Understand the microservice Architecture"
    }
  ])
  return (
    <div>
        <Header title="My Todo List" searchBar={true}/>
        <AddTodo addlist={addlist}/>
        <Todolist todos= {todos} onDelete={onDelete}/>
        <Footer/>
    </div>
  );
}

export default App
