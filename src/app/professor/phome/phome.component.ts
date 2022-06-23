import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/api.service';
import { AppModule } from 'src/app/app.module';
@Component({
  selector: 'app-phome',
  templateUrl: './phome.component.html',
  styleUrls: ['./phome.component.css']
})
export class PhomeComponent implements OnInit {

  data:any;
  name:any;
  Pid:any;
  date:any;
  course:any;
  profData: any;

  constructor(private api:ApiserviceService,private route:Router) { }

  ngOnInit(): void {
    this.profData=AppModule.pid;
    this.route.navigate(['/phome/studAttend']);
   
  }
}
