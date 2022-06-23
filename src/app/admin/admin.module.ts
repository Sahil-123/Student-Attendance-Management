import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SreadComponent } from './sread/sread.component';
import { ScreateComponent } from './screate/screate.component';
import { PreadComponent } from './pread/pread.component';
import { PcreateComponent } from './pcreate/pcreate.component';
import { AhomeComponent } from './ahome/ahome.component';
import { UstudComponent } from './ustud/ustud.component';
import { UprofComponent } from './uprof/uprof.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SreadComponent,
    ScreateComponent,
    PreadComponent,
    PcreateComponent,
    AhomeComponent,
    UstudComponent,
    UprofComponent
  ],
  
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
