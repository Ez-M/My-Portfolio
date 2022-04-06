import React, {useState, useContext} from "react";

import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';

import GeneralProvider from "../contexts/General";
import RenderSwitch from "./RenderSwitch.js";






function Main() { 
    return (
        <GeneralProvider>
            
            <Navbar/>
            <Header/>
            <RenderSwitch/>
            
    {/* <p>Placeholder: Main</p> */}
    </GeneralProvider>
    )
  }
  
  export default Main;