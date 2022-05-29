import React from "react";
import NavBar from "../../components/NavBar/NavBar";

 function Foreman ()  {
    return (
        <div >
            <NavBar/>
            <h1>DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG</h1>
            <div className="work-btn">
                <button className="btn-done btn btn-primary active">Công việc tôi đã phê duyệt</button>
                <button className="btn-submitted btn btn-primary">Công việc gửi để tôi phê duyệt</button>
            </div>
                
            </div>

    )
}
export default Foreman;