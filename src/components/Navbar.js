import React, {useState, useContext} from "react";
import logo from '../imgs/tunabase.png'

import {General} from '../contexts/General'



function Navbar() { 

    const {pageState, setPageState} = useContext(General) //importing context

   
    var btnBio = '';
    var btnPro = '';
    var btnCon = '';

    switch (pageState) {
        case 'Bio':
            var btnBio = 'btnActive';
            var btnPro = '';
            var btnCon = '';
            break;
        case 'Projects':
            var btnBio = '';
            var btnPro = 'btnActive';
            var btnCon = '';
            break;
        case 'Contact':
            var btnBio = '';
            var btnPro = '';
            var btnCon = 'btnActive'; 
            break;



    }

    function nav(x) {
        setPageState(x);
    }






    return (
        
        <div className="NavbarMain">
        

            <div className="titleCard">

{/* <div className="subCard"> */}
        <h2>Ezequiel Martinez</h2> <br />
        <h4>Freelance Developer</h4>
</div> 
            
            
        <div className="buttonContainer">
    <button className={btnBio} onClick={()=> nav('Bio')}>Who I Am</button>  <button className={btnPro} onClick={()=> nav('Projects')}>What I do</button>

    {/* <button onClick={ ()=> nav('Services')}>My Services</button>  */}

     <button className={btnCon} onClick={()=> nav('Contact')}>Contact Me</button>
    </div>

    </div>
    )
  }
  
  export default Navbar;