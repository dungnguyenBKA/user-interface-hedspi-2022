import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KPIMockData, jobDataRows } from "./KPIMockData";
import JobTableNew from "../../components/KPITable/JobTableNew";
import NewForm from "../../components/Form/NewForm";
import useStorage from "./useStorage";
import useJobStorage from "./useJobStorage";
import NavBar from "../../components/NavBar/NavBar";
import { workers } from "../Statistic/StatisticMockData";
const styleUpdate = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 400,
  bgcolor: "background.paper",
  border: 1,
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const ManagerSingleKPI = () => {
  const [KPIData, putKPIData, clearKPIData] = useStorage();

  const [open, setOpen] = useState(false);
  const onChangeKPIForm = () => setOpen(!open);
  const { id } = useParams(); //must be the same as in route in App.tsx
  const convertedId = parseInt(id);
  const [JobData, putJobData, clearJobData] = useJobStorage(convertedId);
  const onAddNewKPI = (newKPI) => {
    putJobData([...JobData, newKPI]);
  };
  const singleKPI = KPIMockData.filter(
    (element) => element.id === convertedId
  )[0];
  const precise = (x) => {
    return x.toPrecision(4);
  };
  const value = precise((singleKPI.completed / singleKPI.allTask) * 100);
  // 5. updateOpen
  const job = JobData[JobData.findIndex((el) => el.jobOrder === 1)];
  const [updateOpen, setUpdateOpen] = useState(false);
  const [updatedKPI, setUpdatedKPI] = useState(job);
  console.log("job", job);
  console.log("updateKPI", updatedKPI);
  const onChangeUpdateOpen = () => setUpdateOpen(!updateOpen);
  const onHandleUpdateChange = (e) => {
    setUpdatedKPI({ ...updatedKPI, [e.target.name]: e.target.value });
    console.log(updatedKPI);
  };
  const onUpdateKPI = () => {
    JobData[JobData.findIndex((el) => el.jobOrder === 1)] = updatedKPI;
    putJobData(JobData);
    setUpdateOpen(!updateOpen);
  };
  //   const dataRows = jobDataRows.filter((element) => element.id === convertedId);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          boxShadow: "none",
          overflow: "visible",
        }}>
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "center",
            marginTop: "30px",
          }}>
          DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG
        </Typography>

        <Typography
          fontWeight="bold"
          sx={{
            fontSize: "30px",
            textAlign: "center",
            marginTop: "20px",
            color: "dodgerblue",
          }}>
          KPI: {singleKPI.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            marginTop: "17.5px",
          }}>
          {/* <Button
                    variant='contained'
                    color='success'
                    sx={{
                        width: '15%',
                        fontSize: "20px"
                    }}
                >
                    Chỉnh sửa KPI
                </Button> */}
        </Box>

        {/* Box has 2 element in a row 40-60 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
          }}>
          {/* Box1: Circle Progress  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "3%",
              marginRight: "5%",
              flex: 4,
              boxShadow: 7,
              borderRadius: "15%",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "65%",
                height: "65%",
                marginBottom: "10px",
              }}>
              <CircularProgressbar
                value={value}
                text={`${value}%`}
                strokeWidth={10}
              />
            </Box>

            <Typography
              variant="button"
              fontWeight="bold"
              color="dodgerblue"
              textTransform="none"
              fontSize="22.5px"
              sx={{
                marginBottom: "5%",
                textAlign: "center",
              }}>
              Số công việc hoàn thành:{" "}
              {`${singleKPI.completed} / ${singleKPI.allTask}`}
            </Typography>
          </Box>

          {/* Box2: 2 Typography */}
          <Box
            sx={{
              flex: 6,
              display: "flex",
              flexDirection: "column",
              marginTop: "7%",
            }}>
            <Typography
              variant="button"
              fontWeight="bold"
              color="red"
              textTransform="none"
              fontSize="25.5px"
              sx={{
                marginBottom: "5%",
              }}>
              Hạn chót hoàn thành KPI: {singleKPI.deadline}
            </Typography>

            <Typography
              variant="button"
              fontWeight="bold"
              color="text"
              textTransform="none"
              fontSize="25.5px">
              Quản đốc phụ trách: {singleKPI.manager}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "28.5px",
              textAlign: "center",
              marginTop: "10px",
            }}>
            Danh sách công việc
          </Typography>

          {/* Table */}
          <JobTableNew rows={JobData} onOpen={onChangeUpdateOpen} />

          <Button
            variant="contained"
            color="success"
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
            onClick={onChangeKPIForm}>
            Thêm công việc mới
          </Button>
          <NewForm
            open={open}
            onChangeKPIForm={onChangeKPIForm}
            onAddNewKPI={onAddNewKPI}
            id={convertedId}
            jobOrder={9}
          />
        </Box>
        <Modal open={updateOpen} onClose={onChangeUpdateOpen}>
          <Box sx={styleUpdate}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "5%",
              }}>
              <Typography
                sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>
                Tên Công Việc
              </Typography>
              <TextField
                id="outlined-password-input"
                label="Tên Công Việc"
                type="text"
                sx={{ width: "70%" }}
                defaultValue={job.jobName}
                value={updatedKPI.jobName}
                name="jobName"
                onChange={onHandleUpdateChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "5%",
              }}>
              <Typography
                sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>
                Công nhân thực hiện{" "}
              </Typography>
              <Box sx={{ width: "70%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Danh sách công nhân
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={job.workers}
                    value={updatedKPI.workers}
                    name="workers"
                    onChange={onHandleUpdateChange}>
                    {workers.map((team) => (
                      <MenuItem value={team.name} key={team.id}>
                        {team.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Button
              onClick={onUpdateKPI}
              variant="contained"
              color="success"
              sx={{
                width: "30%",
                marginTop: "10%",
                marginLeft: "35%",
                fontSize: "18.5px",
              }}>
              Cập nhật
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default ManagerSingleKPI;
