import { useState } from 'react'
import Todo from './components/todo';
import "./App.css";
import TodoForm from './components/TodoForm';
import Seach from './components/Seach';
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [seach, setSeach] = useState("")

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    },
  ]

  setTodos(newTodo)
  }
  
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null
    )
      setTodos(filteredTodos)
  }
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Seach seach={seach} setSeach={setSeach} />
      <div className='todo-list'>
        {todos.filter((todo) => todo.text.toLowerCase().includes(seach.toLowerCase())
        )
         .map((todo) => (
          <Todo key={todo.id}
           todo={todo}
            removeTodo={removeTodo}
             completeTodo={completeTodo} 
             />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
   
  )
}

export default App
