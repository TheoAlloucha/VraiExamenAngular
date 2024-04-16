import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ExamenAngularFront';
  token: string | null = window.localStorage.getItem("token");

  constructor(private router: Router, private toastrService : ToastrService) {
  }


  logout() {
    window.localStorage.removeItem("token");
    this.router.navigate(["/admin"]);
    this.toastrService.info('Vous êtes déconnecté !')

  }

  ngOnInit(): void {
    this.token = window.localStorage.getItem("token");
  }

}
