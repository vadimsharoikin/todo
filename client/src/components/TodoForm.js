import React, {useRef} from 'react';

const TodoForm = ({addTodo}) => {
    const todoInput= useRef('')
    const handlerSubmit = (e) => {
        e.preventDefault()
        addTodo(todoInput.current.value)
        todoInput.current.value=''
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" ref={todoInput}/>
            <button> Добавить цель</button>
        </form>
    );
};

export default TodoForm;