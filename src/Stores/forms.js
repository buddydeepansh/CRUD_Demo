import { makeAutoObservable } from "mobx";

class FormStore {
  device = 1;
  userData = {}

  constructor() {
    makeAutoObservable(this);
  }

  setDevice = (data) => {
    this.device = data;
  };
  setuserData = (data) => {
    this.data = data
  }
}
export default new FormStore();
