import React, {useState, useContext} from "react";

import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';

import GeneralProvider from "../contexts/General";
import RenderSwitch from "./RenderSwitch.js";






function Main() { 
    return (
        <GeneralProvider>
            
            <div className="mainContainer ">
            <Navbar/>

            <div className="parallax"></div>
            {/* <Header/> */}
            <RenderSwitch/>
            </div>
            
    {/* <p>Placeholder: Main</p> */}
    </GeneralProvider>
    )
  }
  
  export default Main;