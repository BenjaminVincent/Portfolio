import React from 'react';
import '../styles/Navbar.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Router, Link } from 'react-router-dom'; COME BACK TO WHEN MULTIPAGE

const Navbar = () => {
    return (
        <div className='navbar-container'>
                <div className='navbar-title'>
                    Benjamin Vincent
                </div>
            <div className='navbar-icons-container'>
            <a href='https://github.com/BenjaminVincent' target='_blank'>
                <FaGithub className='navbar-icon' size='30px' color='#eee' style={{ marginRight: '10px'}} />
            </a>
            <a href='https://www.linkedin.com/in/benjamin-vincent-12464b1a2/' target='_blank'>
                <FaLinkedin className='navbar-icon' size='30px' color='#eee'/>
            </a>
            </div>
        </div>
    );
};

export default Navbar;