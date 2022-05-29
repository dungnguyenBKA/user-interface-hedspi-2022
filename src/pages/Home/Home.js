import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";
import Row from "../../components/Row/Row";
import { DeclineSubmitted } from "../ForemanManage/DeclineSubmitted";


const Home = (props) => {
  const {signOut, user} = useAuth()
  
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


export default Home
