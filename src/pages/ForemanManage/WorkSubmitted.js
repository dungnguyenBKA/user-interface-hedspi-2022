import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { DeclineSubmitted } from "./DeclineSubmitted";
export function WorkSubmitted  ()  {
    return (
        <div >
            <NavBar/>
            <h1>Lắp đặt hệ thống điện cho máy bơm nước dưới hầm ngầm</h1>
            <div className="work-submmited">
                <div className="submitted-img">
                    <p>Ảnh minh chứng</p>
                    <img id="submitted-img" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A" /> 
                </div>
                <div className="submitted-info">
                    <p id="id-worker">ID công nhân :</p>
                    <p id="worker-name">Công nhân</p>
                    <p id="foreman-name">Quản đốc:</p>
                    <p id="day-start">Ngày giao việc:</p>
                    <p id="deadline">Hạn chót:</p>
                    <p id ="proof-day">Ngày gửi minh chứng:</p>
                    <strong id="worker-comments">Ý kiến đến quản đốc</strong>
                    <p id ="worker-comment-input"></p>
                </div>
            </div>
            <div className="accept-btn">
                <button className="btn-accept btn btn-success">Phê duyệt</button>
                <button className="btn-decline btn btn-danger"  >Từ chối phê duyệt</button>
                <DeclineSubmitted/>
            </div>

            </div>

    )
}
