import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './foreman.css';
import {Link} from 'react-router-dom';

 function Foreman ()  {
    return (
        <div className="foreman">
            <NavBar/>
            <div className="foreman-header">
            <h1>DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG</h1>
            <div className="work-btn">
            </div>
            </div>
            <div className="foreman-body">
            <table class="table">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" id="foreman-content1">Nội dung</th>
            <th scope="col" id="foreman-content2">Hình thức</th>
            </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                    <th scope="row">1</th>
                    <td><Link  className='link-content' to='/work-submit'>Khắc phục sự cố cầu giao tầng 1 , VINCOM Hai Bà Trưng</Link></td>
                    <td><button className="btn btn-success btn1">Đã duyệt</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><Link  className='link-content' to='/work-submit'>Lắp đặt 8 bóng đèn ở đại sảnh A</Link></td>
                    <td><button className="btn btn-success btn1">Đã duyệt</button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td><Link  className='link-content' to='/work-submit'>Khắc phục sự cố cầu giao tầng 2 , VINCOM Hai Bà Trưng</Link></td>
                    <td><button className="btn btn-success btn1">Đã duyệt</button></td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td><Link  className='link-content' to='/work-submit'>Lắp đặt hệ thống điện cho máy bơm nước dưới hầm ngầm</Link></td>
                    <td><button className="btn btn-danger btn1">Đang chờ duyệt</button></td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td><Link  className='link-content' to='/work-submit'>Lắp đặt 6 bóng đèn ở tiền sảnh</Link></td>
                    <td><button className="btn btn-danger btn1">Đang chờ duyệt</button></td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td><Link  className='link-content' to='/work-submit'>Sửa chữa hệ thống điện phòng 503</Link></td>
                    <td><button className="btn btn-danger btn1">Đang chờ duyệt</button></td>
                </tr>
    
      
            </tbody>
            </table>
            </div>   
        </div>

    )
}
export default Foreman;