import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { workers, teams } from "../../pages/Statistic/StatisticMockData";

const style = {
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

const NewForm = ({ open, onChangeKPIForm, onAddNewKPI, id, jobOrder }) => {
  const [newKPI, setNewKPI] = useState({
    id: id,
    jobOrder: jobOrder + 1,
    jobName: "",
    jobStatus: 0,
    workers: "",
  });

  const onHandleChange = (event) => {
    setNewKPI({ ...newKPI, [event.target.name]: event.target.value });
  };

  const onCreateNewKPI = () => {
    console.log(newKPI);
    onAddNewKPI(newKPI);
  };

  return (
    <Modal open={open} onClose={onChangeKPIForm}>
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          fontWeight="bold"
          sx={{ textAlign: "center" }}>
          Nhập thông tin về công việc mới
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "5%",
          }}>
          <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>
            Tên Công Việc
          </Typography>
          <TextField
            id="outlined-password-input"
            label="Tên Công Việc"
            type="text"
            sx={{ width: "70%" }}
            value={newKPI.jobName}
            name="jobName"
            onChange={onHandleChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "5%",
          }}>
          <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>
            Công nhận thực hiện{" "}
          </Typography>
          <Box sx={{ width: "70%" }}>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Danh sách công nhân
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newKPI.workers}
                name="workers"
                // label="Danh sách quản đốc"
                onChange={onHandleChange}>
                {workers.map((e) => (
                  <MenuItem value={e.name}>{e.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Button
          onClick={onCreateNewKPI}
          variant="contained"
          color="success"
          sx={{
            marginLeft: "35%",
            marginTop: "7.5%",
            marginBottom: "5%",
            width: "45%",
            height: "10%",
            fontSize: "18px",
          }}>
          Tạo Công Việc
        </Button>
      </Box>
    </Modal>
  );
};

export default NewForm;
