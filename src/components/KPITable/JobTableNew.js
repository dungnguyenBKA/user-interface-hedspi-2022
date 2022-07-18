import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, Button } from "@mui/material";

const JobTableNew = ({ rows, onOpen }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Số thứ tự
            </TableCell>

            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Tên công việc
            </TableCell>

            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Công nhân thực hiện
            </TableCell>

            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Trạng thái
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.jobOrder}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ fontSize: "17.5px" }}>
                {row.jobOrder}
              </TableCell>

              <TableCell align="left" sx={{ fontSize: "17.5px" }}>
                {row.jobName}
              </TableCell>

              <TableCell align="left" sx={{ fontSize: "17.5px" }}>
                {row.workers}
              </TableCell>

              {row.jobStatus === 0 ? (
                <TableCell
                  align="left"
                  sx={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: "17.5px",
                  }}>
                  Đang tiến hành
                </TableCell>
              ) : (
                <TableCell
                  align="left"
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "17.5px",
                  }}>
                  Đã hoàn thành
                </TableCell>
              )}
              <TableCell>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: "17.5px",
                  }}
                  onClick={onOpen}>
                  Chỉnh sửa công việc
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobTableNew;
