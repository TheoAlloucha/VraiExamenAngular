import { Component } from '@angular/core';
import {AuthRequest} from "../../models/auth-request";
import {LoginAdminService} from "../../services/login-admin.service";
import {Router, RouterModule} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {hide} from "@popperjs/core";
import {ToastrService} from "ngx-toastr";
import {VoyageService} from "../../services/voyage.service";
import {Voyage} from "../../models/voyage";

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [MatInputModule, MatCardModule, MatButtonModule, RouterModule, CommonModule,
    FormsModule, ReactiveFormsModule, MatProgressBarModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  authRequest: AuthRequest = new AuthRequest();
  error: string = '';
  isLoading: boolean = false;
  constructor(private loginAdminService: LoginAdminService, private router: Router, private toastrService: ToastrService) {
  }

  loginForm() {
    this.isLoading = true;
    this.loginAdminService.login(this.authRequest).subscribe(data => {
      window.localStorage.setItem("token", data.token);
      this.router.navigate(["admin/view"]);
      this.toastrService.success("Vous êtes connectée en tant que \"" +this.authRequest.username+"\" !")
    }, error => {
      this.error = error.type;
      this.isLoading = false;
      this.toastrService.error("Erreur !")
    })
  }

}
