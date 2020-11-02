import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Animated } from 'react-animated-css';
import { Link } from 'react-scroll';
import { DiJavascript1,
         DiNodejsSmall,
         DiJqueryLogo,
         DiReact,
         DiHtml5, 
         DiCss3, 
         DiJava,
         DiPython,
         DiDjango,
         DiGithubBadge,
         DiPostgresql,
         DiWindows,
         DiVisualstudio, } from "react-icons/di";


const Skills = () => {
    const iconSize = '70px';
    const iconColor = '#eee';
    return (
        <div className='skills-container' id='skills'>
            <div className="skills-wrapper">
            <div className='skills-text' style={{ paddingTop: '25px'}}>
                Skills
            </div>
            <div className='skills-list'>
                <DiJavascript1 size={iconSize} color={iconColor} />
                <DiNodejsSmall size={iconSize} color={iconColor} />
                <DiJqueryLogo size={iconSize} color={iconColor} />
                <DiReact size={iconSize} color={iconColor} />
                <DiHtml5 size={iconSize} color={iconColor} />
                <DiCss3 size={iconSize} color={iconColor} />
                <DiJava size={iconSize} color={iconColor} />
                <DiPython size={iconSize} color={iconColor}/>
                <DiDjango size={iconSize} color={iconColor} />
                <DiGithubBadge size={iconSize} color={iconColor}/>
                <DiPostgresql size={iconSize} color={iconColor} />
                <DiWindows size={iconSize} color={iconColor} />
                <DiVisualstudio size={iconSize} color={iconColor}/>
            </div>
            </div>

        </div>
        
    );
};

export default Skills;
