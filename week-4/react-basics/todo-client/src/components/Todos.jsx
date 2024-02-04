/* eslint-disable react/prop-types */
export default function Todos({todos}) {
  return (
      <div>
          {todos.map(function (todo) {
              return <div>
                  <h1>{todo.title}</h1>
                  <h3>{todo.description}</h3>
                  <button>{todo.completed == true ? "Completed":"Marks as Complete"}</button>
                  </div>
          })} 
    </div>
  )
}
