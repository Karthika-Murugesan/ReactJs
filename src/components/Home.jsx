import React from "react";
import karthika from './profile.jpg';
import "./style.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={karthika}
        alt="Karthika"
        className="profile-image"
        
      />
      
    </div>
  );
};

export default Home;
