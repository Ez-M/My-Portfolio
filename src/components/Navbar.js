import React, {useState, useContext} from "react";
import logo from '../imgs/tunabase.png'

import {General} from '../contexts/General'



function Navbar() { 

    const {pageState, setPageState} = useContext(General) //importing context

    function nav(x) {
        setPageState(x)
    }



    return (
        <div className="NavbarMain">
            
    <button onClick={()=> nav('Bio')}>Who I Am</button>  <button className="btnpad" onClick={()=> nav('Projects')}>What I do</button>
     <img src={logo} alt="Logo Placeholder" width='80px'/>  
    <button onClick={ ()=> nav('Services')}>My Services</button> <button className="btnpad" onClick={()=> nav('Contact')}>Contact Me</button>
    </div>
    )
  }
  
  export default Navbar;