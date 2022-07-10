import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import useAuth from "../../hooks/useAuth";
const NavBar = () => {
  const { signOut, user } = useAuth()
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img
            id="nav-icon"
            src="http://kiemdinhtp.com.vn/wp-content/uploads/2019/01/icon-02.png"
            alt=""
          />
        </Link>
        <Link className='link' to='/'>Trang chủ</Link>

        {user.role === "manager" ? <>
          <Link className='link' to='/manager-KPI'>Quản lý KPI quản đốc</Link>
          <Link className='link' to='/foreman'>Quản lý công việc</Link>
        </> : <></>
        }

        {user.role === "contractor" ? <>
          <Link className='link' to='/contractor-KPI'>Quản lý KPI nhà thầu</Link>
        </> : <></>
        }

        <Link className='link' to='/statistic'>Báo cáo thống kê</Link>
    
        <p>Chào mừng, {user?.username}</p>
        {/* <button type="button" className="btn btn-light">Chào mừng, {user?.username}</button> */}
        <button type="button" className="btn btn-light" onClick={() => {
          signOut()
        }}>
          Đăng xuất
        </button>
      </div>
    </nav>)
}

export default NavBar
