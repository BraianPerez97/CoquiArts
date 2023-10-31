//Dependencies
import React from "react";
import ListCategory from './ListCategory';



//Images
import LogoType from '../assets/logos/LogoType.png'

const Welcome = () => {
    //Categories

  //JSX | HTML
  return (
    <section className="login-card container container3">

      <div className="form">
        <form>
            <div className="w-title">
           <h1 className="card-title2">Welcome to </h1> <img id='logotype' src={LogoType} alt="Coqui Arts Logo"></img> </div>
           <p className="card-p">Tell us about yourself</p>
           
            <input type="text" className="form-control" placeholder="Name or nickname" />
     
    <ListCategory></ListCategory>

          <button type="button" className="btn continue">
            CONTINUE
          </button>

          <div className="w-message">
            <div>
              <p>Build trust by using your full name or professional nickname</p>
              <p className="mini-mess">Remember, you're trying to land with clients. Keep it friendly and easy to remember</p>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Welcome;
