import React, { createContext, useState, useContext } from "react";
export const General = createContext();


const GeneralProvider = (props) => {
  const [pageState, setPageState] = useState('Home'); 

    return (
         <General.Provider 
            value={{
                pageState, setPageState
             }}>
               {props.children}
         </General.Provider>
    )
}
export default GeneralProvider