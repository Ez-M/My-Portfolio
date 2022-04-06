import React, { useState, useContext } from "react";
import logo from "../imgs/tunabase.png";

function Bio() {
  return (
    <div className="BioMain">

      <div className="titleCard">

        {/* <div className="subCard"> */}
      <h2>WELCOME</h2> <br />
      <h4>ALLOW ME TO INTRODUCE MYSELF</h4>
      {/* </div> */}
      </div>
      <div className="card1">

          <div className="imgHolder">
        <img src={logo}></img>
        </div>
        <div className="pHolder">
        <p>
          I'm Ezequiel Martinez, a recent graduate of UCLA Extention School's
          full-stack development program, a burgeoning software developer, and a
          life-long student with the constant desire to learn and improve. I've
          worked in a number of industries and positions, including freelancing
          first as a writer and now as a web developer. I'm always looking for a
          new project, and I'm not afraid of learning some new tricks to get the
          job done. </p> <br /> <br />  <p className="second">If you're looking to key me in on a new
          project, or would like to reach out for any reason, don't hesitate to
          contact me directly. If you're still considering it, or just
          interested in my work, feel free to look around and explore what I do.
          </p>
          </div>
        
      </div>

      <div className="card2">
        <div className="left"> <h3>Placeholder</h3></div>
        <div className="right"><h3>Placeholder</h3></div>
        
        </div>

        <div className="card3">
        <div className="left"> <h3>Placeholder</h3></div>
        <div className="right"><h3>Placeholder</h3></div>
        
        </div>


    </div>
  );
}

export default Bio;
