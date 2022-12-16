import { makeAutoObservable } from "mobx";

class FormStore {
  device = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setDevice = (data) => {
    this.device = data;
  };
}
export default new FormStore();
