import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import FormStore from "../../Stores/forms";
import "./FormModal.css";

const FormModal = observer(() => {
  const [error, seterror] = useState(false);
  const [errMsg, seterrMsg] = useState("Enter valid data.");
  const handleClose = () => {
    FormStore.setformModal(false);
  };
  const AddUserData = (e) => {
    e.preventDefault();
    if (
      FormStore.id === "" ||
      FormStore.first_name === "" ||
      FormStore.last_name === "" ||
      FormStore.email === ""
    ) {
      seterrMsg("Please enter all fields");
      seterror(true);
    } else {
      let uniqueId = true;
      // eslint-disable-next-line array-callback-return
      FormStore.userData.map((x) => {
        console.log(x.id);
        // eslint-disable-next-line eqeqeq
        if (x.id == FormStore.id) {
          seterrMsg("Unique id should be there. Id already exists.");
          seterror(true);
          uniqueId = false;
        }
      });
      if (uniqueId) {
        seterror(false);
        FormStore.setformModal(false);
        let dataObj = FormStore.userData;
        dataObj.push({
          id: FormStore.id,
          first_name: FormStore.first_name,
          last_name: FormStore.last_name,
          email: FormStore.email,
        });
        FormStore.setuserData(dataObj);
        localStorage.setItem("userdata", JSON.stringify(FormStore.userData));
        FormStore.setId("");
        FormStore.setfname("");
        FormStore.setlname("");
        FormStore.setemail("");
      }
    }
  };
  const handleIdChange = (e) => {
    FormStore.setId(e.target.value);
  };
  const handlefnameChange = (e) => {
    FormStore.setfname(e.target.value);
  };
  const handlelnameChange = (e) => {
    FormStore.setlname(e.target.value);
  };
  const handleemailChange = (e) => {
    FormStore.setemail(e.target.value);
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
