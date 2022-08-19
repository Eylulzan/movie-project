import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { User } from "../../models/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: any;
  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private userService: UserService, private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async signUp() {
    if (this.signupForm.valid) {
      try {
        let request: User = {
          email: this.signupForm.value.email,
          password: this.signupForm.value.password,
        };
        await this.userService.addUser(request);
        this.route.navigate(["/login"]);
        this.toastr.success(this.signupForm.value.email,'kayıt başarılı');
      } catch (error) {
        alert(error);
      }
      this.signupForm.reset();
    }
  }
}
