import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import useStorage from '../../pages/ContractorsKPI/useStorage';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 400,
    bgcolor: 'background.paper',
    border: 1,
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const NewKPIForm = ({ open, setOpen, onChangeKPIForm, onAddNewKPI }) => {

    const [newKPI, setNewKPI] = useState({
        id: 8,
        name: "",
        deadline: "",
        allTask: 0,
        completed: 0,
        manager: ""
    });

    const onHandleChange = (event) => {
        setNewKPI({ ...newKPI, [event.target.name]: event.target.value });
    }

    const onCreateNewKPI = () => {
        setOpen(!open); 
        onAddNewKPI(newKPI);
    }

    return (
        <Modal
            open={open}
            onClose={onChangeKPIForm}
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    fontWeight="bold"
                    sx={{ textAlign: "center" }}
                >
                    Nhập thông tin về KPI mới
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Tên KPI</Typography>
                    <TextField
                        id="outlined-password-input"
                        label="Tên KPI"
                        type="text"
                        sx={{ width: "70%" }}
                        value={newKPI.name}
                        name="name"
                        onChange={onHandleChange}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Hạn chót</Typography>
                    <TextField
                        id="outlined-password-input"
                        label="Ngày hạn chót"
                        type="text"
                        sx={{ width: "70%" }}
                        value={newKPI.deadline}
                        name="deadline"
                        onChange={onHandleChange}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Giao việc cho </Typography>
                    <Box sx={{ width: "70%" }}>
                        <FormControl fullWidth>
                            <InputLabel
                                variant="outlined"
                                id="demo-simple-select-label">Danh sách quản đốc</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={newKPI.manager}
                                name="manager"
                                // label="Danh sách quản đốc"
                                onChange={onHandleChange}
                            >
                                <MenuItem value={'Nguyễn Min Dũn'}>Nguyễn Min Dũn</MenuItem>
                                <MenuItem value={'Nguyễn Gia Thanh'}>Nguyễn Gia Thanh</MenuItem>
                                <MenuItem value={'Nguyễn Viết Huy'}>Nguyễn Viết Huy</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Button
                    onClick={onCreateNewKPI}
                    variant='contained'
                    color='success'
                    sx={{
                        marginLeft: "35%",
                        marginTop: "7.5%",
                        marginBottom: "5%",
                        width: "25%",
                        height: "10%",
                        fontSize: "18px"
                    }}
                >
                    Tạo KPI
                </Button>

            </Box>
        </Modal>
    );
}

export default NewKPIForm;