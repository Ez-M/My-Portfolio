import React, {useState, useContext} from "react";
import logo from '../imgs/tunabase.png'
import {General} from '../contexts/General'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Bio from '../components/Bio'
import Contact from '../components/Contact'
import Projects from "../components/Projects"
import Services from "../components/Services"

function RenderSwitch() { 

    const {pageState, setPageState} = useContext(General) //importing context
    
   function calcSwitch() {
    switch(pageState) {
        case 'Home': return false; 
        case 'Bio': return <Bio/>;
        case 'Contact': return <Contact/>
        case 'Projects': return <Projects/>
        case 'Services': return <Services />
    }
   }
    
    return (
    
        <div>
    
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="fade"
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        key={pageState}
      >
        {calcSwitch}
         </CSSTransition>
    </SwitchTransition>
   </div>
        
    
            
    )
  }
  
  export default RenderSwitch;