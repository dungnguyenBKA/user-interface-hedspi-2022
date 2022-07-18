import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { teams } from './StatisticMockData';
import TeamCard from '../../components/Statistic/TeamCard';
import AddTeamCard from '../../components/Statistic/AddTeamCard';
import { CircularProgressbar } from "react-circular-progressbar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/footer";
import useAuth from "../../hooks/useAuth";

import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

const data = [
  {
    "name": "Team A",
    "Tháng 6": 10,
    "Tháng 7": 14,
  },
  {
    "name": "Team B",
    "Tháng 6": 7,
    "Tháng 7": 13,
  },
  {
    "name": "Team C",
    "Tháng 6": 10,
    "Tháng 7": 22,
  },
  {
    "name": "Team D",
    "Tháng 6": 9,
    "Tháng 7": 5,
  },
  {
    "name": "Team E",
    "Tháng 6": 11,
    "Tháng 7": 19,
  },
  {
    "name": "Team F",
    "Tháng 6": 8,
    "Tháng 7": 16,
  },
]

const Statistic = () => {
  const {user} = useAuth()
  if(user.role == 'contractor')
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        boxShadow: "none",
        overflow: "visible",
      }}
    >

      <NavBar />
      <Typography
        sx={{
          fontSize: "30px",
          textAlign: "center",
          marginTop: "30px"
        }}
      >
        DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG
      </Typography>

      {/* Box has 2 element in a row 40-60 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2.5%"
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
            marginRight: "1.5%",
            flex: 4,
            boxShadow: 7,
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
              value={30}
              text={`${30}%`}
              strokeWidth={8}
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
            Số công việc hoàn thành: {`${30} / ${100}`}
          </Typography>
        </Box>

        {/* Box2: 2 Typography */}
        <Box
          sx={{
            flex: 6,
            display: "flex",
            flexDirection: "column",
            marginLeft: "3%",
            marginRight: "2%",
            boxShadow: 7
          }}
        >
          <Typography
            variant='button'
            fontWeight="bold"
            textTransform="none"
            fontSize="22.5px"
            sx={{
              textAlign: "center"
            }}
          >
            Biểu đồ thống kê công việc hoàn thành của các team
          </Typography>

          <Typography
            variant='button'
            textTransform="none"
            fontSize="16px"
            sx={{
              marginBottom: "5%",
              textAlign: "center",
            }}
          >
            <i>(số liệu ngày 20/7/2022)</i>
          </Typography>

          <LineChart width={750} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Tháng 6" stroke="#3C32CF" />
            <Line type="monotone" dataKey="Tháng 7" stroke="#009687" />
          </LineChart>
        </Box>
      </Box>


      <Typography
        sx={{
          fontSize: "30px",
          textAlign: "center",
          marginTop: "30px"
        }}
      >
        Danh sách và tiến độ các team
      </Typography>
      <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: 0.5,
            width: "25%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "1%",
            marginLeft: "38%"
          }}
        >
          <InputBase
            placeholder='Tìm team theo tên'
            sx={{ marginLeft: "2.5%", flex: 5 }}
          />

          <SearchIcon sx={{ flex: 1 }} />
        </Box>
      <Box p={5}>
        <Grid container spacing={6}>
          {teams.map((element) => (
            <Grid
              item xs={12} sm={6} md={4} lg={3} xl={2}
              key={element.id}
            >
              <TeamCard data={element} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <AddTeamCard />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );

  if(user.role == 'manager')return(
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      boxShadow: "none",
      overflow: "visible",
    }}
  >
  <NavBar />

    <Typography
        sx={{
          fontSize: "30px",
          textAlign: "center",
          marginTop: "30px"
        }}
      >
        Danh sách và tiến độ các team
      </Typography>
      <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: 0.5,
            width: "25%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "1%",
            marginLeft: "38%"
          }}
        >
          <InputBase
            placeholder='Tìm team theo tên'
            sx={{ marginLeft: "2.5%", flex: 5 }}
          />

          <SearchIcon sx={{ flex: 1 }} />
        </Box>
      <Box p={5}>
        <Grid container spacing={6}>
          {teams.filter(item => item.leader == user.username).map((element) => (
            <Grid
              item xs={12} sm={6} md={4} lg={3} xl={2}
              key={element.id}
            >
              <TeamCard data={element} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />

  </Box>

  );
  return <div></div>
}

export default Statistic;
