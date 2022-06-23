import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AloginComponent } from './alogin/alogin.component';
import { PloginComponent } from './plogin/plogin.component';
import { PhomeComponent } from './professor/phome/phome.component';
import { SloginComponent } from './slogin/slogin.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"", component:AloginComponent},
  {path:"slog", component:SloginComponent},
  {path:"alog", component:AloginComponent},
  {path:"plog", component:PloginComponent},
  {path:"prof", component:PhomeComponent},
  {path:"stud", component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  AdminModule]
})
export class AppRoutingModule { }
