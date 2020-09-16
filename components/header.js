import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [logout, setLogout] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light navHeader">
        <Link href="/">
          <img className="logo" src="/img/icons/web-logo.png" alt="logo" />
        </Link>
        <div className="navbar-collapse" id="navMenu">
          <ul className="row mr-auto">
            {/* <li className={`${this.props.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#selectFilm">Lịch Chiếu</a>
                </li>
                <li className={`${this.props.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#homeCinemaComplex">Cụm rạp</a>
                </li>
                <li className={`${this.props.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#homeNews">Tin Tức</a>
                </li>
                <li className={`${this.props.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#homeApp">Ứng dụng</a>
                </li> */}
          </ul>
          <div className="row navRight">
              {/* {avatarLogin()} */}
              sfsd
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
