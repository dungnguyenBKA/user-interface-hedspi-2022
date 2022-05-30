import React from "react";
import {Link} from "react-router-dom";
import './navbar.css';
import Login from "../../pages/Login/Login.tsx"
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";


const NavBar = () => {
  const {signOut, user} = useAuth()
  return (
  <nav className='navbar'>
  <div className='container-fluid'>
    <Link className='navbar-brand' to='/'>
      <img 
        id ="nav-icon" 
        src="http://kiemdinhtp.com.vn/wp-content/uploads/2019/01/icon-02.png"
        alt=""
      />
    </Link>
    <Link className='link' to='/'>Trang chủ</Link>
    <Link className='link' to='/'>Quản lý KPI</Link>
    <Link className='link' to='/foreman'>Quản lý công việc</Link>
    <Link className='link' to='/'>Báo cáo thống kê</Link>
    <Link className='link' to='/'>Liên hệ</Link>
    <p>Hello, {user?.username}</p>
      <button type="button" className="btn btn-light" onClick={() => {
        signOut()
      }}>
        Sign Out
      </button>

  </div>

</nav>)
}

export default NavBar