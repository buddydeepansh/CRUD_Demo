import { makeAutoObservable } from "mobx";

class FormStore {
  device = 1;
  formModal = false;
  userData = [];

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
}
export default new FormStore();
