import React, { useState } from 'react';
import { teams } from '../Statistic/StatisticMockData';
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

    const exeTeam = teams[convertedId - 1];

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
                    D??? ??N L???P ?????T H??? TH???NG ??I???N CHO VINCOM HAI B?? TR??NG
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
                        Ch???nh s???a KPI
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
                            S??? c??ng vi???c ho??n th??nh: {`${singleKPI.completed} / ${singleKPI.allTask}`}
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
                            fontSize="25px"
                            sx={{
                                marginBottom: "2.5%"
                            }}
                        >
                            ???H???n ch??t ho??n th??nh KPI: {singleKPI.deadline}
                        </Typography>

                        <Typography
                            variant='button'
                            fontWeight="bold"
                            color="text"
                            textTransform="none"
                            fontSize="25px"
                            sx={{
                                marginBottom: "2.5%"
                            }}
                        >
                            ???Qu???n ?????c ph??? tr??ch: {singleKPI.manager}
                        </Typography>

                        <Typography
                            variant='button'
                            fontWeight="bold"
                            color="text"
                            textTransform="none"
                            fontSize="25px"
                        >
                            ???Team th???c hi???n: {exeTeam.name}
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
                        Danh s??ch c??ng vi???c
                    </Typography>

                    {/* Table */}
                    <Box
                        sx={{
                            boxShadow: 7,
                            width: "90%",
                        }}
                    >
                        <JobTable rows={dataRows}/>
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
                        X??a KPI
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
                            B???n c?? ch???c l?? mu???n x??a KPI kh??ng ?
                        </Typography>

                        <Button
                            variant="contained"
                            color="error"
                            sx={{ width: "15%", marginTop: "5%" }}
                            onClick={onDeleteKPI}
                        >
                            X??a
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
                            <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>T??n KPI</Typography>
                            <TextField
                                id="outlined-password-input"
                                label="T??n KPI"
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
                            <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>H???n ch??t</Typography>
                            <TextField
                                id="outlined-password-input"
                                label="Ng??y h???n ch??t"
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
                            <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Giao vi???c cho </Typography>
                            <Box sx={{ width: "70%" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Danh s??ch qu???n ?????c</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={singleKPI.manager}
                                        value={updatedKPI.manager}
                                        name="manager"
                                        // label="Danh s??ch qu???n ?????c"
                                        onChange={onHandleUpdateChange}
                                    >
                                        {teams.map(team => (
                                            <MenuItem
                                                value={team.leader}
                                                key={team.id}
                                            >
                                                {team.leader}
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
                                fontSize: "18.5px"
                            }}
                        >
                            C???p nh???t
                        </Button>
                    </Box>
                </Modal>

            </Box>
        </>
    );
}

export default ContractorSingleKPI;