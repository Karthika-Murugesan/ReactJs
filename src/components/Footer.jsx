import React from "react";
import "./style.css"; 

const Footer = () => {
  return (
    <footer className="footer" style={{ height: "5%" }}>
      <div>
        <ol id="space">
          <a href="mailto:karthikam0912@gmail.com" style={{ color: "blue" }}>
            <li style={{color:"blue"}}>qnkarthika</li>
          </a>
          <a href="https://github.com/qnkarthika" style={{ color: "blue" }}>
            <li>GitHub</li>
          </a>
          <a href="https://www.linkedin.com/in/karthika--j/" style={{ color: "blue" }}>
            <li>LinkedIn</li>
          </a>
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
