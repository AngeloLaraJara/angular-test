import {PhoneModel} from "./phone.model";

export class UsersModel {
  id: number;
  name : string;
  email : string;
  password : string;
  phone : PhoneModel;

  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
    this.password = "";
    this.phone = new PhoneModel();
  }

}
