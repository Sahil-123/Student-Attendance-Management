import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { PhomeComponent } from './phome/phome.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudAttendanceComponent } from './stud-attendance/stud-attendance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhomeComponent,
    AttendanceComponent,
    StudAttendanceComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfessorModule { 

}
