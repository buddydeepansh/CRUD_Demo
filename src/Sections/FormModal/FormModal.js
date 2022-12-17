import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import FormStore from "../../Stores/forms";
import "./FormModal.css";

const FormModal = observer(() => {
  useEffect(() => {
    console.log(JSON.stringify(FormStore.userData));
  }, []);
  const [error, seterror] = useState(false);
  const [errMsg, seterrMsg] = useState("Enter valid data.");
  const userData = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  const handleClose = () => {
    FormStore.setformModal(false);
  };
  const AddUserData = (e) => {
    e.preventDefault();
    if (
      userData.id === "" ||
      userData.first_name === "" ||
      userData.last_name === "" ||
      userData.email === ""
    ) {
      seterrMsg("Please enter all fields");
      seterror(true);
    } else {
      seterror(false);
      FormStore.setformModal(false);
      let dataObj = FormStore.userData;
      dataObj.push(userData);
      FormStore.setuserData(dataObj);
      localStorage.setItem("userdata", JSON.stringify(FormStore.userData));
    }
  };
  const handleIdChange = (e) => {
    userData.id = e.target.value;
  };
  const handlefnameChange = (e) => {
    userData.first_name = e.target.value;
  };
  const handlelnameChange = (e) => {
    userData.last_name = e.target.value;
  };
  const handleemailChange = (e) => {
    userData.email = e.target.value;
  };

  return (
    <Dialog
      className="AddFormRoot"
      onClose={() => handleClose()}
      open={FormStore.formModal}
    >
      <h4 className="title">Enter new Employee details</h4>
      <div className="FormContainer">
        <form className="newFrm" onSubmit={AddUserData} autoComplete={"off"}>
          <TextField
            id="standard-basic"
            label="Employee Id"
            variant="standard"
            onInput={handleIdChange}
            className={"input1"}
          />
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            onInput={handlefnameChange}
            className={"input1"}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            onInput={handlelnameChange}
            className={"input1"}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            onInput={handleemailChange}
            type={"email"}
            className={"input1"}
          />
          {error && <p className="error">{errMsg}</p>}
          <button className="SaveBtn">Save</button>
        </form>
      </div>
    </Dialog>
  );
});

export default FormModal;
