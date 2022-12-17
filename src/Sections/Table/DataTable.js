import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import FormStore from "../../Stores/forms";

const DataTable = observer(() => {
  const [rows, setRows] = React.useState([]);
  const getData = async () => {
    let localData;
    try {
      localData = localStorage.getItem("userdata");
      localData = JSON.parse(localData);
    } catch (e) {
      localData = null;
    }
    if (localData !== null) {
      FormStore.setuserData(localData);
      console.log(rows);
    } else {
      const apiURL = "https://reqres.in/api/users";
      let dataObj = await fetch(apiURL)
        .then((res) => res.json())
        .then((result) => {
          return result.data;
        });
      dataObj.map((x, i) => {
        return setRows((prev) => {
          return [...prev, JSON.parse(JSON.stringify(x))];
        });
      });
      FormStore.setuserData(JSON.parse(JSON.stringify(dataObj)));
    }
  };
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <div><button type="button" onClick={()=>handleAdd()}>Add Details</button></div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Employee Id</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FormStore.userData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.first_name}</TableCell>
                <TableCell align="center">{row.last_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
});

export default DataTable;
