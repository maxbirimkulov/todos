import React from 'react';
import './statusBtns.css'

const StatusBtns = ({status, setStatus}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    };
    return (
            <div>
                <button className={`btn btn-outline-secondary ${status === 'all' ? 'active' : ''}`} type='button' value='all' onClick={statusHandler}>All</button>
                <button className={`btn btn-outline-secondary ${status === 'active' ? 'active' : ''}`} type='button' value='active' onClick={statusHandler}>Active</button>
                <button className={`btn btn-outline-secondary ${status === 'done' ? 'active' : ''}`} type='button' value='done' onClick={statusHandler}>Done</button>
            </div>
    );
};

export default StatusBtns;