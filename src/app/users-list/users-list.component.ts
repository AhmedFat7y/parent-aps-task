import { Component, OnInit } from "@angular/core";
import { UserModel } from "../models/user.model";
const users = [
  {
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
].map(obj => new UserModel(obj));
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  usersList: Array<UserModel>;
  usersMap: object;
  selectedID: number;

  constructor() {
    this.usersList = users;
    this.usersMap = users.reduce((a, user) => {
      a[user.id.toString()] = user;
      return a;
    }, {});
  }

  ngOnInit() {}
  onItemClick(id) {
    console.log("clicked", id);
    if (this.selectedID === id) {
      this.selectedID = null;
    } else {
      this.selectedID = id;
    }
  }
}
