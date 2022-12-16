import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { observer } from "mobx-react";
import React, { useEffect } from "react";

const DataTable = observer(() => {
  const [rows, setRows] = React.useState([]);
  const getData = async () => {
    const apiURL = "https://reqres.in/api/users?page=1";
    let dataObj = await fetch(apiURL).then((res) => res.json());
    console.log("apiURL", dataObj.data);
    dataObj.data.map((x, i) => {
      return setRows((prev) => {
        return [...prev, x];
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <div><button type="button" onClick={()=>handleAdd()}>Add Details</button></div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee Id</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Profile Photo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">
                  {" "}
                  <img src={row.avatar} alt="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
});

export default DataTable;
