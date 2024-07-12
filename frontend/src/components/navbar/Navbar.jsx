import React, { useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navLogo">
          <span className="logo">
            <img src="/Blue-2.png" alt="" />
          </span>
          <span className="logoName">Wor.ld</span>
        </div>
        <div className="navItems">
          <a href="/register">
            <button className="navButton">Register</button>
          </a>
          <a href="/login">
            <button className="navButton">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
