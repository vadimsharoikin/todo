import React, {useRef, useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [todoInput, setInput] = useState('')

    const handlerSubmit = (e) => {
        e.preventDefault()
        addTodo(todoInput)
        setInput('')
    }
    return (
        <form className="todoform" onSubmit={handlerSubmit}>
            <input type="text" value={todoInput} onChange={(e) => setInput((e.target.value))} required/>
            <button> Добавить цель</button>
        </form>
    );
};

export default TodoForm;
