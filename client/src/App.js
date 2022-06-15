import React, {useEffect, useState} from "react";
import Todos from "./components/Todos";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import './style/App.css';

function App() {

    const [todos, setTodos] = useState([])

    useEffect( () => {
        const getTodos = async () =>{
            const res = await axios.get('http://localhost:8080/api/tasks/')
            setTodos(res.data);
        }
        getTodos();
    },[todos])

    const addTodo = async (task) => {
        const res = await axios.post('http://localhost:8080/api/tasks/', {task:task});
        console.log(res.data)
        setTodos([...todos,res.data]);
    }

    const removeTodo = async (id) => {
        const res = await axios.delete('http://localhost:8080/api/tasks/' + "/" + id);
    }

    const updateTodo = async (id, task) => {
        const res = await axios.put('http://localhost:8080/api/tasks/' + "/" + id, task);
        console.log(res.data)
    }

    return(

        <div className="App">
            <h1> Список задач </h1>
            <p>Всего задач {todos.length}</p>
            <TodoForm addTodo={addTodo}/>
            <Todos
                todos={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
  )

}

export default App;
