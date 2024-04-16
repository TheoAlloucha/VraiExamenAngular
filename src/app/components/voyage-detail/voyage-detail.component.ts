import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../models/voyage";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {VoyageService} from "../../services/voyage.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBar} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";
import {MatBadge} from "@angular/material/badge";
import {NgbCarousel, NgbCarouselModule, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-voyage-detail',
  standalone: true,
  imports: [MatButtonModule, RouterModule, MatProgressBar, CommonModule,
    MatBadge, MatGridListModule, NgbCarousel, NgbSlide, NgbCarouselModule],
  templateUrl: './voyage-detail.component.html',
  styleUrl: './voyage-detail.component.css'
})
export class VoyageDetailComponent implements OnInit{
  isLoading: boolean = true;
  voyage? : Voyage;
  linkFormated? : string | SafeResourceUrl;



  constructor(private activatedRoute : ActivatedRoute, private voyageService : VoyageService, private router : Router, private domSanitizer: DomSanitizer) {
  }

  ngOnInit():void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.voyageService.getOne(+id).subscribe(data => {
        this.voyage = data;
        this.linkFormated = "https://maps.google.com/maps?q=@"+this.voyage.lattitude+","+this.voyage.longitude+"&t=&z=13&ie=UTF8&iwloc=&output=embed"
        if (typeof this.linkFormated === "string") {
          this.linkFormated = this.domSanitizer.bypassSecurityTrustResourceUrl(this.linkFormated);
        }
        this.isLoading = false;
      })
    }
  }

}
