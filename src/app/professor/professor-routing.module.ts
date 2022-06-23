import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { PhomeComponent } from './phome/phome.component';
import { StudAttendanceComponent } from './stud-attendance/stud-attendance.component';

const routes: Routes = [
{path:"phome", component:PhomeComponent,
  children:[
    {path:"", component:AttendanceComponent},
    {path:"giveAttendance", component:AttendanceComponent},
    {path:"studAttend", component:StudAttendanceComponent}
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
