import React, { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Foreman from "./ForemanManage";
import {Link,useParams} from 'react-router-dom';
import './work-submitted.css';

export function WorkSubmitted  ()  {
    const [submit, setSubmit] = useState(0);
    let params = useParams();
    const submitted=[{
        imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
        idWorker:"20180000",
        workerName:"Nguyễn Minh Dũng",
        foremanName:"Nguyễn Gia Thanh",
        dayStart:"4/5/2022",
        deadline:"7/6/2022",
        proofDay:"4/6/2022",
        workerComments:"Em đã hoàn thành công việc được giao, khắc phục sự cố cầu giao tầng 1 , VINCOM Hai Bà Trưng  ",
    },
    {
        imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
        idWorker:"20180001",
        workerName:"Nguyễn Minh Dũn",
        foremanName:"Nguyễn Gia Thanh",
        dayStart:"5/5/2022",
        deadline:"6/6/2022",
        proofDay:"7/6/2022",
        workerComments:"Em đã hoàn thành công việc được giao, lắp đặt thành công 8 đền ở đại sảnh A ",
    },
    {
        imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
        idWorker:"20180002",
        workerName:"Nguyễn Gia Dũng",
        foremanName:"Nguyễn Gia Thanh",
        dayStart:"4/5/2022",
        deadline:"7/6/2022",
        proofDay:"4/6/2022",
        workerComments:"Em đã hoàn thành công việc được giao, đã khắc phục sự cố cầu giao tầng 2 , VINCOM Hai Bà Trưng ",
    },
    {
        imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
        idWorker:"20180003",
        workerName:"Nguyễn Văn Dũng",
        foremanName:"Nguyễn Gia Thanh",
        dayStart:"4/5/2022",
        deadline:"7/6/2022",
        proofDay:"4/6/2022",
        workerComments:"Em đã hoàn thành công việc được giao, lắp đặt xong hệ thống điện cho máy bơm nước dưới hầm A3, theo đúng quy chuẩn ISO-ZYZ ",
    },
    {
        imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
        idWorker:"20180004",
        workerName:"Nguyễn Min Dũng",
        foremanName:"Nguyễn Gia Thanh",
        dayStart:"4/5/2022",
        deadline:"7/6/2022",
        proofDay:"4/6/2022",
        workerComments:"Em đã hoàn thành công việc được giao, lắp đặt xong 6 bóng đèn ở tiền sảnh ",
    },
    {
        imageSrc:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
        idWorker:"20180005",
        workerName:"Nguyễn Văn Dũn",
        foremanName:"Nguyễn Gia Thanh",
        dayStart:"4/5/2022",
        deadline:"7/6/2022",
        proofDay:"4/6/2022",
        workerComments:"Em đã hoàn thành công việc được giao, sửa xong hệ thống điện phòng 503 ",
    }] 
    return (
        <div className="submitted">
            <NavBar/>
            <h1>Lắp đặt hệ thống điện cho máy bơm nước dưới hầm ngầm</h1>
            <div className="work-submitted">
                <div className="submitted-img">
                    <p>Ảnh minh chứng</p>
                    <img id="submitted-image" src={submitted[params.workSubmitId].imageSrc ? submitted[params.workSubmitId].imageSrc : 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A'} /> 
                </div>
                <div className="submitted-info">
                    <p id="id-worker">ID công nhân: {submitted[params.workSubmitId].idWorker ? submitted[params.workSubmitId].idWorker : '' }</p>
                    <p id="worker-name">Công nhân: {submitted[params.workSubmitId].workerName ? submitted[params.workSubmitId].workerName : ''}</p>
                    <p id="foreman-name">Quản đốc: {submitted[params.workSubmitId].foremanName ? submitted[params.workSubmitId].foremanName : ''}</p>
                    <p id="day-start">Ngày giao việc: {submitted[params.workSubmitId].dayStart ? submitted[params.workSubmitId].dayStart : ''}</p>
                    <p id="deadline">Hạn chót: {submitted[params.workSubmitId].deadline ? submitted[params.workSubmitId].deadline : ''}</p>
                    <p id ="proof-day">Ngày gửi minh chứng: {submitted[params.workSubmitId].proofDay ? submitted[params.workSubmitId].proofDay : ''}</p>
                    <strong id="worker-comments">Ý kiến đến quản đốc</strong>
                    <p id ="worker-comment-input">{submitted[params.workSubmitId].workerComments ? submitted[params.workSubmitId].workerComments : ''} </p>
                </div>
            </div>
            <div className="accept-btn">
                <button className="btn-accept btn btn-success" ><Link to='/foreman' className="accept-btn-link" onClick={() => setSubmit('Đã duyệt')}>Phê duyệt</Link></button>
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
                                                    <Link to='/foreman' className="declines-btn-link btn btn-danger" onClick={() =>  {
                                                        setSubmit('Từ chối phê duyệt');
                                                        const black = document.querySelectorAll('.modal-backdrop.fade.show');
                                                        black.forEach(n => {
                                                            n.style.display ='none';   
                                                        }) 
                                                    }
                                                 }>Gửi lại cho công nhân</Link>
                                                </div>
                                        </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}


