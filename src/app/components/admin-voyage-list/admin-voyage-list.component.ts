import { Component } from '@angular/core';
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DeleteConfirmService} from "../../services/delete-confirm.service";

@Component({
  selector: 'app-admin-voyage-list',
  standalone: true,
  imports: [MatProgressBar, CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './admin-voyage-list.component.html',
  styleUrl: './admin-voyage-list.component.css'
})
export class AdminVoyageListComponent {

  voyages?: Voyage[];
  isLoading: boolean = true;

  constructor(private voyageService: VoyageService, private toastr : ToastrService, private confirmService: DeleteConfirmService) {
  }


  ngOnInit():void {
    this.voyageService.getAll().subscribe(data =>{
      this.voyages = data;
      this.isLoading = false;
    })

  }
  deleteEvent(id: any) {
    this.isLoading = true;
    this.confirmService
      .confirm("Veuillez confirmer",
        "Action irrémédiable" ).then(res => {
      if(res){
        this.voyageService.removeVoyage(+id).subscribe(data => {
          this.ngOnInit();
          this.isLoading = false;
          this.toastr.success("Voyage supprimé")
        })
      }
    });
  }


}
