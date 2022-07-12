import React, { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import { Link, useParams } from 'react-router-dom';
import './work-submitted.css';
import useWork from "../../hooks/useWork";
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function WorkSubmitted() {
  const workers = [];
  const [submit, setSubmit] = useState(0);
  const params = useParams();
  const id = Number(params.workSubmitId)

  const { works, changeSubmitWork } = useWork()

  const work = works.find((_item) => _item.id === id)
  console.log({ work })

  const submitted = [{
    imageSrc: "https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg",
    idWorker: "20180000",
    workerName: "Nguyễn Minh Dũng",
    foremanName: "Nguyễn Gia Thanh",
    dayStart: "4/5/2022",
    deadline: "7/6/2022",
    proofDay: "4/6/2022",
    workerComments: "Em đã hoàn thành công việc được giao, khắc phục sự cố cầu giao tầng 1 , VINCOM Hai Bà Trưng  ",
  },
  {
<<<<<<< HEAD
    imageSrc: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
=======
    imageSrc: "https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg",
>>>>>>> 1e666ad367b7f48b7264ca6b3f9ffa94a76314dc
    idWorker: "20180001",
    workerName: "Nguyễn Minh Dũn",
    foremanName: "Nguyễn Gia Thanh",
    dayStart: "5/5/2022",
    deadline: "6/6/2022",
    proofDay: "7/6/2022",
    workerComments: "Em đã hoàn thành công việc được giao, lắp đặt thành công 8 đền ở đại sảnh A ",
  },
  {
<<<<<<< HEAD
    imageSrc: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
=======
    imageSrc: "https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg",
>>>>>>> 1e666ad367b7f48b7264ca6b3f9ffa94a76314dc
    idWorker: "20180002",
    workerName: "Nguyễn Gia Dũng",
    foremanName: "Nguyễn Gia Thanh",
    dayStart: "4/5/2022",
    deadline: "7/6/2022",
    proofDay: "4/6/2022",
    workerComments: "Em đã hoàn thành công việc được giao, đã khắc phục sự cố cầu giao tầng 2 , VINCOM Hai Bà Trưng ",
  },
  {
<<<<<<< HEAD
    imageSrc: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
=======
    imageSrc: "https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg",
>>>>>>> 1e666ad367b7f48b7264ca6b3f9ffa94a76314dc
    idWorker: "20180003",
    workerName: "Nguyễn Văn Dũng",
    foremanName: "Nguyễn Gia Thanh",
    dayStart: "4/5/2022",
    deadline: "7/6/2022",
    proofDay: "4/6/2022",
    workerComments: "Em đã hoàn thành công việc được giao, lắp đặt xong hệ thống điện cho máy bơm nước dưới hầm A3, theo đúng quy chuẩn ISO-ZYZ ",
  },
  {
<<<<<<< HEAD
    imageSrc: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
=======
    imageSrc: "https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg",
>>>>>>> 1e666ad367b7f48b7264ca6b3f9ffa94a76314dc
    idWorker: "20180004",
    workerName: "Nguyễn Min Dũng",
    foremanName: "Nguyễn Gia Thanh",
    dayStart: "4/5/2022",
    deadline: "7/6/2022",
    proofDay: "4/6/2022",
    workerComments: "Em đã hoàn thành công việc được giao, <br/>lắp đặt xong 6 bóng đèn ở tiền sảnh ",
  },
  {
<<<<<<< HEAD
    imageSrc: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A",
=======
    imageSrc: "https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg",
>>>>>>> 1e666ad367b7f48b7264ca6b3f9ffa94a76314dc
    idWorker: "20180005",
    workerName: "Nguyễn Văn Dũn",
    foremanName: "Nguyễn Gia Thanh",
    dayStart: "4/5/2022",
    deadline: "7/6/2022",
    proofDay: "4/6/2022",
    workerComments: "Em đã hoàn thành công việc được giao, sửa xong hệ thống điện phòng 503 ",
  }]
  return (
    <div className="submitted" style={{ marginBottom: "5%" }}>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: "15px", marginBottom: "2.5%" }}>
        <Typography
          variant='button'
          fontWeight="bold"
          color="text"
          textTransform="none"
          fontSize="25.5px"
        >
          {work.name}
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "3%",
          marginRight: "2%",
          boxShadow: 7
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>ID công nhân</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Họ tên công nhân</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Quản đốc phụ trách</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Ngày giao việc</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Hạn chót</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={submitted[params.workSubmitId].idWorker}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].idWorker ? submitted[params.workSubmitId].idWorker : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].workerName ? submitted[params.workSubmitId].workerName : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].foremanName ? submitted[params.workSubmitId].foremanName : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].dayStart ? submitted[params.workSubmitId].dayStart : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px", color: "red", fontWeight: "bold" }}>
                  {submitted[params.workSubmitId].deadline ? submitted[params.workSubmitId].deadline : ''}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <div style={{ textAlign: "center", marginTop: "3%", marginBottom: "1%" }}>
        <Typography
          variant='button'
          fontWeight="bold"
          color="text"
          textTransform="none"
          fontSize="25.5px"
        >
          Báo cáo và hoạt động
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "3%",
          marginRight: "2%",
          boxShadow: 7
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>STT</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Ảnh minh chứng</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Ngày gửi minh chứng</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold", width: "20%" }}>Ý kiến đến quản đốc</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold", width: "20%" }}>Lý do từ chối (nếu có)</TableCell>
                <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' sx={{ fontSize: "16.5px" }}>
                  {1}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  <div className="submitted-img">
                    <img id="submitted-image"
                      src={submitted[params.workSubmitId].imageSrc ? submitted[params.workSubmitId].imageSrc : 'https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg'} />
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].proofDay ? submitted[params.workSubmitId].proofDay : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].workerComments ? submitted[params.workSubmitId].workerComments : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  Sai thiết kế và yêu cầu kĩ thuật theo tiêu chuẩn ISO-9247, điều 98, khoản B
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "17px", color: "red", fontWeight: "bold" }}>
                  Bị từ chối
                </TableCell>
              </TableRow>

              <TableRow
                key={2}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' sx={{ fontSize: "16.5px" }}>
                  {2}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  <div className="submitted-img">
                    <img id="submitted-image"
<<<<<<< HEAD
                      src={submitted[params.workSubmitId].imageSrc ? submitted[params.workSubmitId].imageSrc : 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A'} />
=======
                      src={submitted[params.workSubmitId].imageSrc ? submitted[params.workSubmitId].imageSrc : 'https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/bzivycwk/2022_06_20/p10-anhchinh-2739.jpg'} />
>>>>>>> 1e666ad367b7f48b7264ca6b3f9ffa94a76314dc
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].proofDay ? submitted[params.workSubmitId].proofDay : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  {submitted[params.workSubmitId].workerComments ? submitted[params.workSubmitId].workerComments : ''}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px" }}>
                  { }
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px", color: "orange", fontWeight: "bold" }}>
                  Đang chờ duyệt
                </TableCell>

                {/* <TableCell align="center" sx={{ fontSize: "16.5px", color: "red", fontWeight: "bold" }}>
                  <button
                    className="btn-accept btn btn-success">
                    <Link
                      to='/foreman'
                      className="accept-btn-link"
                      onClick={() => {
                        changeSubmitWork({
                          ...work,
                          isSubmitted: true
                        })
                      }}>
                      Phê duyệt
                    </Link>
                  </button>
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "16.5px", color: "red", fontWeight: "bold" }}>
                  <button className="btn-decline btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Từ chối phê duyệt
                  </button>
                </TableCell> */}
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <div className="work-submitted">
        <div className="submitted-img">
          <p>Ảnh minh chứng</p>
          <img id="submitted-image"
            src={submitted[params.workSubmitId].imageSrc ? submitted[params.workSubmitId].imageSrc : 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/204173775_1735354279993790_2419304328112645580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=TDwmDyxZw0oAX-8cFPM&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_HqV156Xz1eOPebaSL-1NGpDbfDy-eRV8EOKoMYP69rA&oe=62B8894A'} />
        </div>

        <div className="submitted-info">
          <p id="id-worker">ID công
            nhân: {submitted[params.workSubmitId].idWorker ? submitted[params.workSubmitId].idWorker : ''}</p>
          <p id="worker-name">Công
            nhân: {submitted[params.workSubmitId].workerName ? submitted[params.workSubmitId].workerName : ''}</p>
          <p id="foreman-name">Quản
            đốc: {submitted[params.workSubmitId].foremanName ? submitted[params.workSubmitId].foremanName : ''}</p>
          <p id="day-start">Ngày giao
            việc: {submitted[params.workSubmitId].dayStart ? submitted[params.workSubmitId].dayStart : ''}</p>
          <p id="deadline">Hạn
            chót: {submitted[params.workSubmitId].deadline ? submitted[params.workSubmitId].deadline : ''}</p>
          <p id="proof-day">Ngày gửi minh
            chứng: {submitted[params.workSubmitId].proofDay ? submitted[params.workSubmitId].proofDay : ''}</p>
          <strong id="worker-comments">Ý kiến đến quản đốc</strong>
          <p
            id="worker-comment-input">{submitted[params.workSubmitId].workerComments ? submitted[params.workSubmitId].workerComments : ''} </p>
        </div>
      </div> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "3%",
          marginRight: "2%",
          marginTop: "2.5%"
        }}
      >
        <button
          className="btn-accept btn btn-success"
          style={{ marginRight: "10%" }}
        >
          <Link
            to='/foreman'
            className="accept-btn-link"
            onClick={() => {
              changeSubmitWork({
                ...work,
                isSubmitted: true
              })
            }}>
            Phê duyệt công việc
          </Link>
        </button>
        <button className="btn-decline btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Từ chối phê duyệt
        </button>
      </Box>
      <div className="accept-btn">
        {/* <button
          className="btn-accept btn btn-success">
          <Link
            to='/foreman'
            className="accept-btn-link"
            onClick={() => {
              changeSubmitWork({
                ...work,
                isSubmitted: true
              })
            }}>
            Phê duyệt
          </Link>
        </button>
        <button className="btn-decline btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Từ chối phê duyệt
        </button> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <strong class="modal-title" id="exampleModalLabel">Nội dung từ chối phê duyệt</strong>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <textarea id="foreman-comments" className="form-control modal-body" rows="5"></textarea>
              <div class="modal-footer">
                <Link
                  to='/foreman'
                  className="declines-btn-link btn btn-danger"
                  onClick={() => {
                    const black = document.querySelectorAll('.modal-backdrop.fade.show');
                    black.forEach(n => {
                      n.style.display = 'none';
                    })
                    changeSubmitWork({
                      ...work,
                      isSubmitted: false
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


