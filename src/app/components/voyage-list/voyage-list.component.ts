import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-voyage-list',
  standalone: true,
  imports: [MatProgressBar, CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './voyage-list.component.html',
  styleUrl: './voyage-list.component.css'
})
export class VoyageListComponent implements OnInit{
  voyages?: Voyage[];
  isLoading: boolean = true;

  constructor(private voyageService: VoyageService) {
  }

  ngOnInit():void {
    this.voyageService.getAll().subscribe(data =>{
      this.voyages = data;
      this.isLoading = false;
    })

  }

}
