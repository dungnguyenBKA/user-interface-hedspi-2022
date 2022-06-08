import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Foreman from "./ForemanManage";
import {Link} from 'react-router-dom'
import './work-submitted.css'

export function WorkSubmitted  ()  {
    return (
        <div className="submitted">
            <NavBar/>
            <h1>Lắp đặt hệ thống điện cho máy bơm nước dưới hầm ngầm</h1>
            <div className="work-submitted">
                <div className="submitted-img">
                    <p>Ảnh minh chứng</p>
                    <img id="submitted-image" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A" /> 
                </div>
                <div className="submitted-info">
                    <p id="id-worker">ID công nhân: 20180000</p>
                    <p id="worker-name">Công nhân: Nguyễn Minh Dũng</p>
                    <p id="foreman-name">Quản đốc: Nguyễn Gia Thanh</p>
                    <p id="day-start">Ngày giao việc: 4/5/2022</p>
                    <p id="deadline">Hạn chót: 7/6/2022</p>
                    <p id ="proof-day">Ngày gửi minh chứng: 4/6/2022</p>
                    <strong id="worker-comments">Ý kiến đến quản đốc</strong>
                    <p id ="worker-comment-input">Em đã hoàn thành công việc được giao, lắp đặt xong hệ thống điện cho máy bơm nước dưới hầm A3, theo đúng quy chuẩn ISO-ZYZ </p>
                </div>
            </div>
            <div className="accept-btn">
                <button className="btn-accept btn btn-success" ><Link to='/foreman' className="accept-btn-link">Phê duyệt</Link></button>
                <button className="btn-decline btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" >Từ chối phê duyệt</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <strong class="modal-title" id="exampleModalLabel">Nội dung từ chối phê duyệt</strong>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                            <textarea id="foreman-comments" className="form-control modal-body" rows="5"></textarea>
                                                <div class="modal-footer">
                                                    <a href='/foreman' className="accept-btn-link btn btn-danger">Gửi lại cho công nhân</a>
                                                </div>
                                        </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}
/*const submitted ={
    imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
    idWorker:"20180000",
    workerName:"Nguyễn Minh Dũng",
    foremanName:"Nguyễn Gia Thanh",
    dayStart:"4/5/2022",
    deadline:"7/6/2022",
    proofDay:"4/6/2022",
    workerComments:"Em đã hoàn thành công việc được giao, lắp đặt xong hệ thống điện cho máy bơm nước dưới hầm A3, theo đúng quy chuẩn ISO-ZYZ ",

}
*/
