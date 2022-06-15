import React, {useState} from 'react';

const Todoitem = (props) => {
    const [checked, setChecked] = useState(props.todo.completed);
    function chengeCheckbox() {
        setChecked(!checked)
        props.update(props.todo._id,{'completed':!checked})
    }
    return (
        <div className="todoItem">
            <input
                type="checkbox"
                onChange={chengeCheckbox}
                checked={checked}
            />
            <h1 className={` ${checked ? 'completed' : ''}`}>{props.todo.task}</h1>
            <button onClick={()=>props.remove(props.todo._id)}>X</button>
        </div>
    );
};

export default Todoitem;
