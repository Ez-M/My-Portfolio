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
        

            <div className="titleCard">

{/* <div className="subCard"> */}
        <h2>Ezequiel Martinez</h2> <br />
        <h4>Freelance Developer</h4>
</div> 
            
            
        <div className="buttonContainer">
    <button onClick={()=> nav('Bio')}>Who I Am</button>  <button onClick={()=> nav('Projects')}>What I do</button>
     
    <button onClick={ ()=> nav('Services')}>My Services</button> <button onClick={()=> nav('Contact')}>Contact Me</button>
    </div>

    </div>
    )
  }
  
  export default Navbar;