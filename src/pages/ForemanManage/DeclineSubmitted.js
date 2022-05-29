import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './decline-submitted.css'

export function DeclineSubmitted ()  {
    return (
        <div className="declineSubmitted" >
        <NavBar/>
              <p id="decline-title">Nội dung từ chối phê duyệt</p>
              <textarea id="foreman-comments" className="form-control" rows="5"></textarea>
              <br></br>
              <button className="btn-give btn btn-danger">Gửi lại cho công nhân</button>
          </div>

    )
}