import { Routes } from '@angular/router';
import {VoyageListComponent} from "./components/voyage-list/voyage-list.component";
import {VoyageDetailComponent} from "./components/voyage-detail/voyage-detail.component";
import {AdminLoginComponent} from "./components/admin-login/admin-login.component";
import {AdminVoyageListComponent} from "./components/admin-voyage-list/admin-voyage-list.component";
import {AdminVoyageAddComponent} from "./components/admin-voyage-add/admin-voyage-add.component";
import {AdminVoyageEditComponent} from "./components/admin-voyage-edit/admin-voyage-edit.component";

export const routes: Routes = [
  {path: '', component:VoyageListComponent},
  {path: 'admin', component:AdminLoginComponent},
  {path: 'admin/view', component:AdminVoyageListComponent},
  {path: 'admin/add', component:AdminVoyageAddComponent},
  {path: 'admin/edit/:id', component:AdminVoyageEditComponent},
  {path: ':id', component:VoyageDetailComponent}
];
