import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo items-center">
            <div className="flex">
            <Image src="/images/my-logo.png"
              width={60}
              height={60}
              alt="console"
              className='rounded-2xl relative mr-3 mb-4' />
              <h1 className="mt-2">Alvito Aditya</h1>
            </div>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link

                href="/"

                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link

                href="#"

                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link

                href="#"

                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link

                href="#"

                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
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