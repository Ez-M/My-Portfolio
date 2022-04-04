import React, {useState, useContext} from "react";
import logo from '../imgs/tunabase.png'
import {General} from '../contexts/General'

import Bio from '../components/Bio'
import Contact from '../components/Contact'
import Projects from "../components/Projects"
import Services from "../components/Services"

function RenderSwitch() { 

    const {pageState, setPageState} = useContext(General) //importing context
    switch(pageState) {
        case 'Home': return false; 
        case 'Bio': return <Bio/>;
        case 'Contact': return <Contact/>
        case 'Projects': return <Projects/>
        case 'Services': return <Services />
    }
    return (
        <div className="RenderSwitch"> </div>
            
    )
  }
  
  export default RenderSwitch;