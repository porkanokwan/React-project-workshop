import './index.css';
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './component/InputTodo';
import TodoList from './component/TodoList';

function App() {
  const [inputTodo, setInputTodo] = useState("")
  const [todos, setTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState("");

  const handleInputTodo = (e) => setInputTodo(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setTodo(prev => [...prev, {id: uuidv4(),todo: inputTodo, status: "active"}]);
    setInputTodo("");
  }
  const handleClickChangeStatus = (id) => {
    const newTodos = [...todos];
    const changeStatus = todos.find(todo => todo.id === id);
    changeStatus.status = changeStatus.status === "active" ? "complete" : "active";
    setTodo(newTodos);
  }
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodo(newTodos);
  }
  const handleClearComplete = () => {
    const todoActive = todos.filter(item => item.status !== "complete");
    setTodo(todoActive);
  }
  const todoFiltered = !filteredTodo ? todos : todos.filter((item) => item.status === filteredTodo);
  
  return (
    <div className="container"> 
      <h1>To Do List</h1>
      <InputTodo handleSubmit={handleSubmit} inputTodo={inputTodo} handleInputTodo={handleInputTodo} />
      <TodoList 
        todos={todoFiltered}
        filteredTodo={filteredTodo}
        setFilteredTodo={setFilteredTodo}
        handleClickChangeStatus={handleClickChangeStatus} 
        handleDeleteTodo={handleDeleteTodo} 
        handleClearComplete={handleClearComplete} />
    </div>
  );
}

export default App;
