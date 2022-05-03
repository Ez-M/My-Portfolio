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
          <h2>Modern</h2>
          <h2>Flexible</h2>
          <h2>Responsive</h2>
          <p>
           websites built just for the needs of you and your business</p>
          <br /> <br />  
          <p className="second"> Professional businesses need a professional website, 
          in today's modern world your digital storefront is your first, and often 
          the only chance to make an impression. Make sure to put your best foot forward 
          with quick prose and a sleek communicative design.  
          
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
