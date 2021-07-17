import React from 'react';
import Todo from "../todo";
import './todoList.css'

const TodoList = ({todos, setTodos, status, searchInput}) => {
    return (
            <ul className='todoList'>
                {todos.filter(todo => {
                    switch (status) {
                        case 'active':{
                            return todo.isActive
                        }
                        case 'done':{
                            return !todo.isActive
                        }
                        default :
                            return todo
                    }
                })
                    .filter((todo)=>{
                   return  todo.todoName.includes(searchInput)
                }).map((item)=>{
                   return <Todo key={item.id} name={item.todoName} setTodos={setTodos} todos={todos} todoObj={item}/>
                })}
            </ul>
    );
};

export default TodoList;