import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Header = () => {
  const [logout, setLogout] = useState(false);
  // let user = JSON.parse(localStorage.getItem('UserGuest'));
  // let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
  // localStorage.setItem('UserGuest')
  // console.log();
  const handleLogout = ()=>{
    // localStorage.removeItem('UserGuest');
    // localStorage.removeItem('UserAdmin'); 
    setLogout(true)
  }

  // const avatarLogin = ()=>{
  //   if (user !== null || userAdmin !== null) {
  //     return (
  //         <>
  //             {/* <p>Xin chào <Link href='/profile'>{userAdmin ? userAdmin.taiKhoan : user.taiKhoan}</Link></p> */}
  //             <Link href='/' className="logoutButton ml-3 text-white avatar btn btn-danger"><a  onClick={handleLogout}>Đăng xuất</a></Link>
  //         </>
  //     )
  //   } else {
  //       return <Link href='/login' className="avatar"><a><img src={'./img/avatar.png'} alt="avatar" /> Đăng Nhập</a></Link>
  //   }
  // }

  const state = useSelector(state => state.movieReducer);
  // console.log(state);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.actGetListMovieAPI())
    // console.log();
  }, [])
  // console.log(dispatch);
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light navHeader">
        <Link href="/">
          <img className="logo" src="/img/icons/web-logo.png" alt="logo" />
        </Link>
        {/* <div className="navbar-collapse" id="navMenu">
          <ul className="row mr-auto">
            <li className={`${!state.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#selectFilm">Lịch Chiếu</a>
                </li>
                <li className={`${!state.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#homeCinemaComplex">Cụm rạp</a>
                </li>
                <li className={`${!state.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#homeNews">Tin Tức</a>
                </li>
                <li className={`${!state.isDisplayMenu ? "" : "displayMenu"}`}>
                <a href="#homeApp">Ứng dụng</a>
                </li>
          </ul>
        </div> */}
          <div className="row navRight">
              {/* {avatarLogin()} */}
              Login
          </div>
      </nav>
    </header>
  );
};

export default Header;
