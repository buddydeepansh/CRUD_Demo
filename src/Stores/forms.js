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
  setuserData = ()
}
export default new FormStore();
