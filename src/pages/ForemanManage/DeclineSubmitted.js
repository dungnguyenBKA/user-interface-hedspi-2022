import React from "react";
import NavBar from "../../components/NavBar/NavBar";

export function DeclineSubmitted ()  {
    return (
        <div >
            <NavBar/>
            <p>Nội dung từ chối phê duyệt</p>
                <input id="foreman-comments" className="form-text"></input>
                <button className="btn-give btn btn-primary">Gửi lại cho công nhân</button>
            </div>

    )
}