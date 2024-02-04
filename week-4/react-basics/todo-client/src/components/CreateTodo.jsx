import { useState } from "react"

function CreateTodo(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

  return (
      <div>
          <input type="text" id="title" placeholder='title' onChange={(e) => {
              const value = e.target.value;
              setTitle(e.target.value);
          }}></input><br/>
          <input type="text" id="description" placeholder='description' onChange={(e) => {
              const value = e.target.value;
              setDescription(e.target.value);
          }}></input>
          <br/>
          <button onClick={() => {
              fetch("http://localhost:3000/todo",{
                  method: "POST",
                  body: JSON.stringify({
                      title: title,
                      description: description
                  }),
                  headers: {
                      "Content-type": "application/json"
                  }
              })
                  .then(async(res) => {
                      const json = await res.json();
                      alert("Todo Added");
              })
                  }}>Add ToDo</button>
    </div>
  )
}

export default CreateTodo