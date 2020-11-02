import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Animated } from 'react-animated-css';
import { Link } from 'react-scroll';

const Landing = () => {
    return (
        <div className='landing-container' id='landing'>
            <div className='text-container'>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className='home-text'>Benjamin</div>
                    <div className='home-text'>Vincent.dev</div>
                    <div className='home-text'>Portfolio</div>
                </Animated>
            </div>
            <Link
                activeClass='active'
                to='skills'
                smooth={true}
                duration={300}
            >
                <Animated 
                    animationIn='bounce' 
                    animationInDuration='3000' 
                    style={{cursor: 'pointer', position: 'absolute', bottom: '40px', marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0' }}
                >
                <FaAngleDoubleDown size='55px' color='#eee' />
                </Animated>
            </Link>
        </div>
    );
};

export default Landing;




