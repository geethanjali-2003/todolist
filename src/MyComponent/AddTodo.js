import React, { useState } from 'react';

const AddTodo = ({addlist}) => {

    // reacthook variable for title and desc
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault()
        // applying condition not to be blank for title and desc
        if(!title || !desc)
        {
            alert("Do not leave Blank !")
        }
        // if title and desc is not blank then add method invoked
        addlist(title,desc)
    }

  return (
    <div className='container'>
    <form onSubmit = {submit}>
    <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
    </div>
    <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
    </form>
    </div>
  );
}

export default AddTodo;
