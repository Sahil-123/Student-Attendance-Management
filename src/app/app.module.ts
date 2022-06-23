import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloginComponent } from './slogin/slogin.component';
import { PloginComponent } from './plogin/plogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { AdminModule } from './admin/admin.module';
import { ProfessorModule } from './professor/professor.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    SloginComponent,
    PloginComponent,
    AloginComponent,
    StudentComponent,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    ProfessorModule,
      // Specify ng-circle-progress as an import
      NgCircleProgressModule.forRoot({
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
      }),
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  static pid:String='';

  static tpresent:any=4;
  static tabsent:any=4;

}
