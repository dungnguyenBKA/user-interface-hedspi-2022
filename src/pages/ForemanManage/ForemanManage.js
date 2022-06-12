import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import './foreman.css';
import {Link} from 'react-router-dom';
import useWork from "../../hooks/useWork";

function Foreman() {

  const {works} = useWork()

  return (
    <div className="foreman">
      <NavBar/>
      <div className="foreman-header">
        <h1>DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG</h1>
        <div className="work-btn">
        </div>
      </div>
      <div className="foreman-body">
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" id="foreman-content1">Nội dung</th>
            <th scope="col" id="foreman-content2">Hình thức</th>
          </tr>
          </thead>
          <tbody className="table-body">
          {
            works.map((work, index) => {
              return <tr>
                <th scope="row">{index}</th>
                <td>
                  <Link className='link-content' to={`/work-submit/${work.id}`}>{work.name}</Link>
                </td>
                <td>
                  <button
                    className={"btn " + (work.isSubmitted ? "btn-success" : "btn-danger") + " btn1"}>
                    {work.isSubmitted ? "Đã duyệt" : "Đang chờ duyệt"}
                  </button>
                </td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Foreman;