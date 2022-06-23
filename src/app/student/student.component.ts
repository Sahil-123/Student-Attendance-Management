import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name:any;
  usn:any;
  dob:any;
  dept:any;

  oomd:any;

  studData:any;

  c:any;

  coures: string[]=["Object Oriented Modeling Language","Computer Netwoking","Digital Image Processing", "Data Mining","Advance Data Structure"];

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.studData =window.history.state.Data[0];
    console.log( window.history.state);

    this.name=this.studData.name;
    this.usn=this.studData.usn;
    this.dob=this.studData.DOB;
    this.dept=this.studData.dept;
    this.c = document.getElementById('bar');

    this.charts('myChart1',this.studData.oomdAtt,this.studData.oomdTAd);
    this.charts('myChart2',this.studData.cnAtt,this.studData.cnTAt);
    this.charts('myChart3',this.studData.dipAtt,this.studData.dipTAt);
    this.charts('myChart4',this.studData.dmAtt,this.studData.dmTAt);
    this.charts('myChart5',this.studData.adsAtt,this.studData.adsTAt);

  }

  charts(name:any,present:any,total:any){
    const myChart = new Chart(name, {
      type: 'pie',
      data: {
        labels: ["Present", "Absent"],
        datasets: [{
          label: "Attendances",
          backgroundColor: ["green", "red"],
          data: [present, (total-present)]
        }]
      },
      options: {
        title: {
          display: true,
          text: ('Course Attendence  ' + present / total * 100 + '%  Toatal Present '+present+' Total Absent '+(total-present))
        }
      }
    });
  }
  
}
