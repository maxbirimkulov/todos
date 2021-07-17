import React from 'react';
import './header.css'

const Header = ({todos}) => {
    const more = () =>{
        return todos.filter((todo) => todo.isActive).length
    };
    const done = () =>{
        return todos.filter((todo) => !todo.isActive).length
    };
    return (
        <header>
            <h1 className='header-title'>Todo List</h1>
            {todos.length === 0 ? <p className="statusBar">Количество ваших заданий</p> : <div className="statusBar">
                {more()} more to do, {done()} done
            </div>}

        </header>
    );
};

export default Header;