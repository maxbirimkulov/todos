import React from 'react';
import Search from "../search";
import StatusBtns from "../statusBtns";
import './navPanel.css'

const NavPanel = ({status, setSearchInput, setStatus}) => {
    return (
        <div className='search'>
            <Search setSearchInput={setSearchInput}/>
            <StatusBtns status={status} setStatus={setStatus}/>
        </div>
    );
};

export default NavPanel;