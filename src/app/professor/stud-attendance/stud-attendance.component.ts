import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/api.service';
import { AppModule } from 'src/app/app.module';


@Component({
  selector: 'app-stud-attendance',
  templateUrl: './stud-attendance.component.html',
  styleUrls: ['./stud-attendance.component.css']
})
export class StudAttendanceComponent implements OnInit {

  successMsg:any;

  courseTaken:any;

  readStudent:any;

  getparamid:any;

  profData:any;

  Course:any;

  Pid:any;

  constructor(private api:ApiserviceService,private router: ActivatedRoute) { }

  async ngOnInit() {
    this.getparamid = AppModule.pid;
    await this.getAllData();
  }

  async getAllData(){

    await this.api.getAllStudents().subscribe((res)=>{
      console.log('get All Users',res);
      this.readStudent = res.Data;
    });

    await this.api.getProfessor(AppModule.pid).subscribe((res)=>{
      console.log('get All Users',res);
      this.profData=res.Data[0]
      this.Pid=this.profData.Pid;
      this.Course=this.profData.Course;
    })

  }

  getCourse(data:any){
    switch(this.profData.Course){
      case "OOMD": return data.oomdAtt;
      case "CN": return data.cnAtt;
      case "DM": return data.dmAtt;
      case "DIP": return data.dipAtt;
      case "ADS": return data.adsAtt;
    }
    return "none";
  }

  getCourseTa(data:any){
    switch(this.profData.Course){
      case "OOMD": return data.oomdTAd;
      case "CN": return data.cnTAt;
      case "DM": return data.dmTAt;
      case "DIP": return data.dipTAt;
      case "ADS": return data.adsTAt;
    }
    return "none";
  }


  clear(){
    this.successMsg='';
  }

  count=0;
  a:any;
  b:any;
  average(stud:any){
    this.a=this.getCourse(this.readStudent[this.count]);
    this.b=this.getCourseTa(this.readStudent[this.count]);
    console.log(this.a/this.b*100);
    console.log(this.readStudent[this.count])
    this.count++;
    return (this.a/this.b*100)+"%" ;
  }

  Attended(){
    return this.getCourse(this.readStudent[this.count]);
  }

  outOf(){
    return this.getCourseTa(this.readStudent[this.count]);
  }



}
