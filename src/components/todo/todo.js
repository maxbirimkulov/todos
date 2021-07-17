import React from 'react';
import './todo.css'

const Todo = ({todos, setTodos , name, todoObj}) => {
    const deleteTodo = () => {
        setTodos( todos.filter((item) => {
                return item.id !== todoObj.id
        }))
    };
    const doneTodo = () => {
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, isActive: !todo.isActive} : todo))
    };
    const importantTodo = () => {
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, isImportant: !todo.isImportant} : todo))
    };
    
    return (
        <li className='todoItem'>
           <p className={`todo-text ${todoObj.isActive ? '' : 'done'} ${todoObj.isImportant ? 'important' : ''}`}> {name}</p>
            <div className='todo-btns'>
                <button className={`btn btn-outline-success ${todoObj.isActive ? '' : 'active'} `} type='button' onClick={doneTodo}><i className="fas fa-check" /></button>
                <button className={`btn btn-outline-warning  ${todoObj.isImportant ? 'active' : ''} `} type='button' onClick={importantTodo}><i className="fas fa-exclamation-triangle" /></button>
                <button className={`btn btn-outline-danger`} type='button' onClick={deleteTodo}><i className="fas fa-trash-alt" /></button>
            </div>
        </li>
    );
};

export default Todo;