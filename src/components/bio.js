import React, { useState, useContext } from "react";
import logo from "../imgs/tunabase.png";
import Headshot from "../imgs/Headshot.jpg";

function Bio() {
  return (
    <div className="BioMain">

     
       {/* </div>  */}
    {/* <div className="asideLeft"> asideLeft</div> */}

      <div className="card1">

          {/* <div className="imgHolder">
           <img src={Headshot}></img>
          </div> */}
        <div className="pHolder">
          <p>
          Modern, clean, agile websites built just for the needs of you and your business.  </p>
          <br /> <br />  
          <p className="second"> If you're still considering it, or just inerested in my work,
           feel free to take a look around and explore what I do.
            </p>
          </div>
        
      </div>

      {/* <div className="asideRight">asideRight</div> */}

      {/* <div className="card2">
        <div className="left"> <h3>Placeholder</h3></div>
        <div className="right"><h3>Placeholder</h3></div>
        
        </div>

        <div className="card3">
        <div className="left"> <h3>Placeholder</h3></div>
        <div className="right"><h3>Placeholder</h3></div>
        
        </div> */}


    </div>
  );
}

export default Bio;
