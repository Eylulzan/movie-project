import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../models/user.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User;
  paths = [
    { path: "home", name: "Anasayfa", isActive: false },
    { path: "movies", name: "En İyi Filmler", isActive: false },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem("user");
    setTimeout(location.reload.bind(location), 1);
  }
}
