import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Typography,
    Button, Modal,
    Select, MenuItem,
    TextField, FormControl,
    InputLabel
} from "@mui/material";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KPIMockData, jobDataRows } from './KPIMockData';
import JobTable from '../../components/KPITable/JobTable';
import useStorage from './useStorage';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 150,
    bgcolor: 'background.paper',
    border: 1,
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const styleUpdate = {
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

const ContractorSingleKPI = () => {

    // 1. get object singleKPI to render main screen
    const { id } = useParams(); //must be the same as in route in App.tsx
    const convertedId = parseInt(id);
    const [KPIData, putKPIData, clearKPIData] = useStorage();
    console.log(KPIData);
    const singleKPI = KPIData.filter(element => element.id === convertedId)[0];
    console.log(singleKPI);

    // 2. calculate percentage 
    const precise = (x) => {
        return x.toPrecision(4);
    }
    const value = precise(singleKPI.completed / singleKPI.allTask * 100);

    // 3. get job data with id === KPI.id 
    const dataRows = jobDataRows.filter(element => element.id === convertedId);

    // 4. deleteOpen 
    const [deleteOpen, setDeleteOpen] = useState(false);
    const onChangeDeleteOpen = () => setDeleteOpen(!deleteOpen);
    const navigator = useNavigate();
    const onDeleteKPI = () => {
        putKPIData(KPIData.filter(ele => ele.id !== convertedId));
        navigator(`/contractor-KPI`);
    }

    // 5. updateOpen
    const [updateOpen, setUpdateOpen] = useState(false);
    const [updatedKPI, setUpdatedKPI] = useState(singleKPI);
    const onChangeUpdateOpen = () => setUpdateOpen(!updateOpen);
    const onHandleUpdateChange = (e) => {
        setUpdatedKPI({ ...updatedKPI, [e.target.name]: e.target.value });
    }
    const onUpdateKPI = () => {
        KPIData[KPIData.findIndex(el => el.id === convertedId)] = updatedKPI;
        putKPIData(KPIData);
        setUpdateOpen(!updateOpen);
        navigator(`/contractor-KPI/${convertedId}`);
    }

    // 6. value of calendar
    const [deadline, setDeadline] = useState(null);

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
                }}
            >

                <Typography
                    sx={{
                        fontSize: "30px",
                        textAlign: "center",
                        marginTop: "30px"
                    }}
                >
                    DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG
                </Typography>

                <Typography
                    fontWeight="bold"
                    sx={{
                        fontSize: "30px",
                        textAlign: "center",
                        marginTop: "20px",
                        color: 'dodgerblue'
                    }}
                >
                    KPI: {singleKPI.name}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                        marginTop: "17.5px",
                    }}
                >
                    <Button
                        variant='contained'
                        color='success'
                        onClick={onChangeUpdateOpen}
                        sx={{
                            width: '15%',
                            fontSize: "20px"
                        }}
                    >
                        Chỉnh sửa KPI
                    </Button>
                </Box>

                {/* Box has 2 element in a row 40-60 */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "center",
                    }}
                >
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
                            borderRadius: "15%"
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "65%",
                                height: "65%",
                                marginBottom: "10px",
                            }}
                        >
                            <CircularProgressbar
                                value={value}
                                text={`${value}%`}
                                strokeWidth={10}
                            />
                        </Box>

                        <Typography
                            variant='button'
                            fontWeight="bold"
                            color="dodgerblue"
                            textTransform="none"
                            fontSize="22.5px"
                            sx={{
                                marginBottom: "5%",
                                textAlign: "center"
                            }}
                        >
                            Số công việc hoàn thành: {`${singleKPI.completed} / ${singleKPI.allTask}`}
                        </Typography>
                    </Box>

                    {/* Box2: 2 Typography */}
                    <Box
                        sx={{
                            flex: 6,
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "7%",
                            marginLeft: "3%",
                            marginRight: "5%",
                        }}
                    >
                        <Typography
                            variant='button'
                            fontWeight="bold"
                            color="red"
                            textTransform="none"
                            fontSize="25.5px"
                            sx={{
                                marginBottom: "5%"
                            }}
                        >
                            Hạn chót hoàn thành KPI: {singleKPI.deadline}
                        </Typography>

                        <Typography
                            variant='button'
                            fontWeight="bold"
                            color="text"
                            textTransform="none"
                            fontSize="25.5px"
                        >
                            Quản đốc phụ trách: {singleKPI.manager}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        fontWeight="bold"
                        sx={{
                            fontSize: "28.5px",
                            textAlign: "center",
                            marginTop: "10px"
                        }}
                    >
                        Danh sách công việc
                    </Typography>

                    {/* Table */}
                    <Box
                        sx={{
                            boxShadow: 7,
                            width: "90%",
                        }}
                    >
                        <JobTable rows={dataRows} />
                    </Box>

                    <Button
                        variant="contained"
                        onClick={onChangeDeleteOpen}
                        color="error"
                        sx={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            fontSize: "20px",
                            width: '10%',
                        }}
                    >
                        Xóa KPI
                    </Button>
                </Box>

                <Modal
                    open={deleteOpen}
                    onClose={onChangeDeleteOpen}
                >
                    <Box sx={style}>
                        <Typography
                            fontWeight="bold"
                            color="text"
                            textTransform="none"
                            fontSize="20px"
                        >
                            Bạn có chắc là muốn xóa KPI không ?
                        </Typography>

                        <Button
                            variant="contained"
                            color="error"
                            sx={{ width: "15%", marginTop: "5%" }}
                            onClick={onDeleteKPI}
                        >
                            Xóa
                        </Button>
                    </Box>
                </Modal>

                <Modal
                    open={updateOpen}
                    onClose={onChangeUpdateOpen}
                >
                    <Box sx={styleUpdate}>
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
                                defaultValue={singleKPI.name}
                                value={updatedKPI.name}
                                name="name"
                                onChange={onHandleUpdateChange}
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
                                defaultValue={singleKPI.deadline}
                                // autoComplete="current-password"
                                sx={{ width: "70%" }}
                                value={updatedKPI.deadline}
                                name="deadline"
                                onChange={onHandleUpdateChange}
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
                                    <InputLabel id="demo-simple-select-label">Danh sách quản đốc</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={singleKPI.manager}
                                        value={updatedKPI.manager}
                                        name="manager"
                                        // label="Danh sách quản đốc"
                                        onChange={onHandleUpdateChange}
                                    >
                                        <MenuItem value={'Nguyễn Min Dũn'}>Nguyễn Min Dũn</MenuItem>
                                        <MenuItem value={'Nguyễn Gia Thanh'}>Nguyễn Gia Thanh</MenuItem>
                                        <MenuItem value={'Nguyễn Viết Huy'}>Nguyễn Viết Huy</MenuItem>
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
                                fontSize: "18.5px"
                            }}
                        >
                            Cập nhật
                        </Button>
                    </Box>
                </Modal>

            </Box>
        </>
    );
}

export default ContractorSingleKPI;