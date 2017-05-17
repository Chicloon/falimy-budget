import { observable, action } from "mobx";
import axios from "axios";
import Api from 'helpers/api';


export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable items;
  @observable item;

  @observable testval;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};

    this.testval = "Cobbled together by ";
  }

  async fetchData(pathname, id) {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${pathname}`
    );
    console.log(data);

    const response = await Api.get('/Doctors');
    const status = await response.status;
    if (status === 200) {
      const doctors = await response.json();
      console.log(doctors);
    } else {
      console.log(status);
    }

    


    data.length > 0 ? this.setData(data) : this.setSingle(data);
  }

  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
