import React, { useState, useContext, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import logo from "../imgs/tunabase.png";
import NFYThumb from "../imgs/NFYthumbnail.JPG";


function Projects() {
  return (
    <div className="ProjectsMain">
      <p>
        Welcome to my projects page, here you'll see everything I've done and
        whatever it is I'm currently doing. Some of these will be paid jobs, but
        I also do a lot of practice and study in my free time.
      </p>
      <br />

      <div className="cardHolder">
        <div className="card1">
          <h4>News For You</h4>
          <div className="imgHolder">
          <img src={NFYThumb} alt="Project Thumbnail" />
          <a href="https://github.com/Ez-M/Gold-Glory-Goblins" >Github</a> <br/>
          <a href="https://blooming-mesa-06853.herokuapp.com">Live</a>
          </div>
          <p>
            News For You is your standard template news site complete with a secure login, 
             a user dashboard where information can be changed, 
            and user submittable comments for each article. Additionally, some foundations were set up for searching/filtering articles, and for 
            site administrators to view user's comment history. While my contributions were primarily 
            in establishing our database and routing, by the end of the project we all contributed in
             some way to the front-end and back-end.
          </p>
        </div>


        <div className="card2">
          <h4>Gold Glory Goblins!</h4>
          <div className="imgHolder">
          <img src={logo} alt="Project Thumbnail" />
          <a href="https://github.com/Ez-M/Gold-Glory-Goblins" >Github</a>
          </div>
          <p>
          This was an interesting personal project to recreate the functionality of one
            of my favorite narrative roleplaying games purely through javascript and Reactjs. 
            While it doesn't look pretty yet&#40;though it may soon!&#41; it does function entirely as I wanted. 
            I actually went a step further than my initial goal and implemented a fully functional and modularized combat
             system. The current content of the game is all just placeholder, and I don't have a deployed production version quite yet.
              But feel free to poke around my code until then. 
          </p>
        </div>

        <div className="card1">
          <h4>Project Title</h4>
          <div className="imgHolder">
          <img src={logo} alt="Project Thumbnail" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur di incidiit, sed do eiusmod
            tempor incidi elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects;
