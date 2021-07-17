import React from 'react';
import './addTodo.css'

const AddTodo = ({setTodos, todos, inputText, setInputText}) => {
    const formHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos,{
            todoName: inputText,
            isActive: true,
            isImportant: false,
            id: Math.round(Math.random() * 1000)
            }
        ]);
        setInputText('')
    };
    return (
        <form action="" className='form' onSubmit={formHandler}>
            <input className='form-input' type="text" required placeholder='What needs to be done' value={inputText} onChange={(e)=>{
                setInputText(e.target.value)
            }}/>
            <button className='btn btn-info' type='submit'>Add Todo</button>
        </form>
    );
};

export default AddTodo;