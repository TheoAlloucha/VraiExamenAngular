import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatProgressBar} from "@angular/material/progress-bar";
import {CommonModule, NgIf} from "@angular/common";
import {AuthRequest} from "../../models/auth-request";
import {LoginAdminService} from "../../services/login-admin.service";
import {Router, RouterModule} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {BrowserModule} from "@angular/platform-browser";
import {Picture} from "../../models/picture";

@Component({
  selector: 'app-admin-voyage-add',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatProgressBar,
    NgIf,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './admin-voyage-add.component.html',
  styleUrl: './admin-voyage-add.component.css'
})
export class AdminVoyageAddComponent {
  voyage : Voyage = new Voyage();
  error: string = '';
  isLoading: boolean = false;
  types: string[] =  ['Mer','Montagne','Campagne']
  pictures : Picture[] = [];
  mainPicture? : Picture
  productForm: FormGroup;

  constructor(private voyageService: VoyageService, private router: Router, private toastrService: ToastrService, private fb:FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }


  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      source: '',
      alt: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }


  submitForm(formSubmit: any) {
    this.isLoading = true;

    // Gestion Multiple Input
    for (let i = 0 ; i < this.productForm.value.quantities.length ; i ++ ) {
      let picture = new Picture(this.productForm.value.quantities[i].alt , this.productForm.value.quantities[i].source);
      this.pictures?.push(picture)
    }
    if (this.pictures) {
      this.voyage.pictures = this.pictures;
    }

    // Gestion Main Picture
    if (formSubmit){
      this.voyage.mainPicture = new Picture(
        formSubmit.value.mainSrc,
        formSubmit.value.mainAlt
      );

    }


    this.voyageService.postVoyage(this.voyage).subscribe(data => {
      this.router.navigate(["admin/view"]);
      this.toastrService.success("Nouveau voyage ajoutée !")
    }, error => {
      this.error = error.type;
      this.isLoading = false;
      this.toastrService.error("Erreur !")
    })
  }

}
