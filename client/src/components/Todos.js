import React from 'react';
import Todoitem from "./Todoitem";

const Todos = (props) => {
    return (
        <div className="todolst">
            {props.todos.map(todo =>(
            <Todoitem
                key={todo._id}
                todo={todo}
                remove={props.removeTodo}
                update={props.updateTodo}
            />
            ))}
        </div>

    );
};

export default Todos;
