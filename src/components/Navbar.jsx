import React from 'react';
import '../styles/Navbar.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-title'>Benjamin Vincent</div>
            <div className='navbar-icons-container'>
                <FaGithub className='navbar-icon' size='30px' color='#eee' style={{ marginRight: '10px'}}/>
                <FaLinkedin className='navbar-icon' size='30px' color='#eee'/>
            </div>
        </div>
    );
};

export default Navbar;