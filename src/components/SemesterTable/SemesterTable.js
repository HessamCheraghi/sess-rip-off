import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { tableHeadList, tableBodyList } from "./subjectList";

export default function SemesterTable() {
  // TODO add routes for each row
  return (
    <TableContainer component={Paper}>
      <Typography
        gutterBottom
        sx={{ textAlign: "center", mt: 2 }}
        id="tableTitle"
        component="div"
      >
        چک لیست نیمسال تحصیلی فعال
      </Typography>
      <Table aria-label="simple table">
        <caption style={{ textAlign: "center" }}>مجموع واحد ها: {18}</caption>
        <TableHead>
          <TableRow>
            {tableHeadList.map((tableHead) => (
              <TableCell key={tableHead} align="center">
                {tableHead}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyList.map((list, i) => (
            <TableRow
              key={list.subjectNumber}
              sx={{
                userSelect: "none",
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
              }}
            >
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{list.subjectNumber}</TableCell>
              <TableCell align="center">{list.subjectTitle}</TableCell>
              <TableCell align="center">{list.subjectUnit}</TableCell>
              <TableCell align="center">{list.subjectClassNumber}</TableCell>
              <TableCell align="center">{list.subjectStatus}</TableCell>
              <TableCell align="center">{list.classStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
