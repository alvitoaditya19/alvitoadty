import React, { useState } from "react";
import NextLink from "next/link";

import Image from "next/image";
import { Link } from 'react-scroll';


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NextLink href="/" className="nav-logo items-center">
            <div className="flex items-center">
              <Image src="/images/my-logo.png"
                width={60}
                height={60}
                alt="console"
                className='rounded-xl relative mr-4' />
              <h1>Alvito Aditya</h1>
            </div>
          </NextLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link activeClass="active" smooth spy to="home" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" smooth spy to="experience" className="nav-links">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" smooth spy to="projects" className="nav-links">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" smooth spy to="achievement" className="nav-links">
                Achievement
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;