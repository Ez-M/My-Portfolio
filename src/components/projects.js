import React, {useState, useContext, useEffect} from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import logo from '../imgs/tunabase.png'


function Projects() { 

 




    return (
        <div className="ProjectsMain">
      
    <p>Welcome to my projects page, here you'll see everything I've done and whatever it is I'm currently doing. Some of these will be paid jobs, but I also do a lot of practice and study in my free time.</p><br/>
    
    <div className="cardHolder">
    <div  className="card1">
        <h4>Project Title</h4>
        <img src={logo} alt="Project Thumbnail" />
    <p>Lorem ipsum dolor sit amet, consectetur di incidiit, sed do eiusmod tempor incidi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
    </div>
    </div>

   
   
    )
 
};
  export default Projects;