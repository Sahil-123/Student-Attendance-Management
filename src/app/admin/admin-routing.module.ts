import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhomeComponent } from './ahome/ahome.component';
import { PcreateComponent } from './pcreate/pcreate.component';
import { PreadComponent } from './pread/pread.component';
import { ScreateComponent } from './screate/screate.component';
import { SreadComponent } from './sread/sread.component';
import { UprofComponent } from './uprof/uprof.component';
import { UstudComponent } from './ustud/ustud.component';

const routes: Routes = [
  {path:"ahome", component:AhomeComponent,
  
    children:[
      {path:"", component:SreadComponent},
      {path:"readP", component:PreadComponent},
      {path:"createP", component:PcreateComponent},
      {path:"readS", component:SreadComponent},
      {path:"createS", component:ScreateComponent},
      {path:"ustud/:id", component:UstudComponent},
      {path:"uprof/:id", component:UprofComponent},
      
    ]

  },
  
  // {path:"readP", component:PreadComponent},
  // {path:"createP", component:PcreateComponent},
  // {path:"readS", component:SreadComponent},
  // {path:"createS", component:ScreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
