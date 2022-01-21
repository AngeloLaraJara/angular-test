import {Component, OnInit} from '@angular/core';
import {UsersModel} from "./model/users.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {

  selectedUser: UsersModel = new UsersModel();
  disabledButon = false;
  users:UsersModel[] = [
    {
      id: 1,
      name : "Juan Rodriguez" ,
      email : " juan@rodriguez.org " ,
      password : "hunter2" ,
      phone :
        {
          number : 1234567 ,
          cityCode : 1 ,
          countryCode : 57
        }
    },
    {
      id: 2,
      name : "Angelo Lara" ,
      email : " angelo@lara.org " ,
      password : "hunter2" ,
      phone :
        {
          number : 979138035 ,
          cityCode : 77,
          countryCode : 278
        }
    },
    {
      id: 3,
      name : "Luz Sepúlveda" ,
      email : " luz@sepulveda.org " ,
      password : "hunter2" ,
      phone :
        {
          number : 91568872 ,
          cityCode : 23 ,
          countryCode : 59997
        }
    }
  ];

  ngOnInit(): void {
    this.onChange();
  }

  addUser () {
    if (this.selectedUser.id === 0) {
      this.selectedUser.id = this.users.length +1;
      this.users.push(this.selectedUser);
      this.selectedUser = new UsersModel();
    }

  }

  editUser(user: UsersModel) {
    this.selectedUser = user;
  }

  deleteUser() {
    if (confirm("¿Estás seguro que deseas eliminar este usuario?")) {
      this.users = this.users.filter(u => u != this.selectedUser);
      this.selectedUser = new UsersModel();
    }
  }

  onChange() {
    console.log(this.selectedUser)
    if (
      this.selectedUser.id !== 0 ||
      this.selectedUser.name !== "" ||
      this.selectedUser.email !== "" ||
      this.selectedUser.password !== "" ||
      this.selectedUser.phone.number !== 0 ||
      this.selectedUser.phone.cityCode !== 0 ||
      this.selectedUser.phone.countryCode !== 0) {
      this.disabledButon = false;

    } else {
      this.disabledButon = true;
    }
  }


}
