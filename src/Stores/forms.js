import { makeAutoObservable } from "mobx";

class FormStore {
  device = 1;
  formModal = false;
  userData = [];
  id = "";
  first_name = "";
  last_name = "";
  email = "";

  constructor() {
    makeAutoObservable(this);
  }

  setDevice = (data) => {
    this.device = data;
  };
  setuserData = (data) => {
    this.userData = data;
    // console.log(Object.assign({}, this.userData[0]));
  };
  setformModal = (data) => {
    this.formModal = data;
  };
  setId = (data) => {
    this.id = data;
  };
  setfname = (data) => {
    this.first_name = data;
  };
  setlname = (data) => {
    this.last_name = data;
  };
  setemail = (data) => {
    this.email = data;
  };
}
export default new FormStore();
