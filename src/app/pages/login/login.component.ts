import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { filter } from "rxjs";
import { User } from "../../models/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  users: User[];
  loginForm: FormGroup;
  movie: any;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async getUsers() {
    this.users = await this.userService.getUsers();
  }

  login() {
    if (this.loginForm.valid) {
      let formUser: User = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      let checkUserAuth =
        this.users.filter(
          (user) =>
            user.email === formUser.email && user.password === formUser.password
        ).length > 0
          ? this.toastr.success(this.loginForm.value.email,'giriş başarılı'): false;

      if (checkUserAuth) {
        // Login olduktan sonra Anasayfaya dönme işlemini (navigate) setTimeout ile 2 saniye geciktir. O sürede ekranda pop-up çıksın (Giriş başarılı hoşgeldiniz vs.)
       
        setTimeout(location.reload.bind(location), 1);
       
        this.route.navigate(["/home"]);
        localStorage.setItem("user", JSON.stringify(formUser));
      } else {
      }
    }
  }
}
