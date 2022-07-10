import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="container-fuild">
            <div id="footer">
                <figure id="contain-footer-icon" >
                    <img src="http://kiemdinhtp.com.vn/wp-content/uploads/2019/01/icon-02.png" alt="" />
                    <figcaption id="footer-name"></figcaption>
                </figure>

                <section id="footer-menu">
                    <Link className='footer-link' id="teacher-name" to="/">GVHD: Cô Vũ Thị Hương Giang</Link>
                    <Link className='footer-link' to="/">Liên hệ với chúng tôi</Link>
                    <Link className='footer-link' to="/">Đóng góp ý kiến</Link>
                    <Link className='footer-link' to="/">Về Project</Link>
                </section>

                <section id="footer-team">
                    <Link className='footer-link' id="team-name" to="/">Group 9-IT4442</Link>
                    <p>Email   :thanh2309pro@gmail.com</p>
                    <p>SĐT     :0912398293</p>
                    <p>Địa chỉ :Đại học Bách Khoa Hà Nội - Số 1 Đại Cồ Việt</p>
                </section>
            </div>
        </footer>

    )
}
export default Footer;