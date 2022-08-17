import { Component, OnInit } from "@angular/core";
import { User } from "./models/user.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  authUser: User;
  title = "angular-movie-project";
  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.authUser = JSON.parse(localStorage.getItem("user"));
    }
  }
}
