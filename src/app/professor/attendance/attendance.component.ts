import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { ApiserviceService } from 'src/app/api.service';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  successMsg: any;

  readStudent: any;
  profData: any;

  Pid: any;
  Course: any;

  present: number = 0;
  absent: number = 0;

  //Prof date
  Tday: any;

  Tdate: any;

  flag: boolean = false;
  flag2: boolean = true;

  sdate: any;
  element: any;

  dateRef:any;

  constructor(private api: ApiserviceService, private route: Router) { }



  ngOnInit() {



    this.element = document.getElementById('inputDate');

    console.log("re initilized")

    this.chartInitilize();

    this.Tdate = this.changeFormat(new Date());

    this.getAllData();
    this.api.getProfessor(AppModule.pid).subscribe((res) => {
      console.log('get All Users', res);
      this.profData = res.Data[0]
      this.Pid = this.profData.Pid;
      this.Course = this.profData.Course;
      this.Tday = this.profData.TDay;
      console.log(this.Tday);
      console.log(this.Tdate)
      console.log(this.Tdate === this.Tday)


      // //check todays day
      // if (this.Tdate === this.Tday) {

      //   this.absent = AppModule.tabsent;
      //   this.present = AppModule.tpresent;
      //   console.log("Data Readed")

      //   this.flag = true;

      //   alert("Todays attendance is Given wait for tommorow")

      // } else {
      //   this.profData.TDay = this.Tdate;
      //   console.log("professor Updated" + this.profData);
      //   this.api.updateProfessor(this.profData).subscribe((res) => {
      //     console.log(this.profData)
      //     console.log(res);
      //   });


      // }

      this.chartInitilize();

    });

  }



  //Chart
  chartInitilize() {
    console.log(this.present, this.absent);
    if (this.present + this.absent > 0) {
      const myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ["Present", "Absent"],
          datasets: [{
            backgroundColor: ["green", "red"],
            data: [this.present, this.absent]
          }]
        },
        options: {
          title: {
            display: true,
            text: ('Today Student Attendance ' + (this.present / (this.present + this.absent) * 100) + '% Total Present Students ' + this.present + ' Total Absent Students ' + this.absent)
          }
        }
      });
    }

  }

  async getAllData() {
    await this.api.getAllStudents().subscribe((res) => {
      console.log('get All Users', res);
      this.readStudent = res.Data;
    })
  }

  clear() {
    this.successMsg = '';
  }

  studData: any;

  async Present(data: any, one: HTMLElement, two: HTMLElement) {

    this.flag2 = false;


    if (!this.sdate) {
      alert("Please Select date of Attendance");
    } else {
      if (this.flag) {
        console.log('same date old Data');
        one.setAttribute('disabled', '');
        two.setAttribute('disabled', '');

        alert("Todays attendance is Given wait for tommorow")


      } else {
        console.log(this.changeFormat(new Date()));

        //Data setting
        await this.api.getStudent(data).subscribe(async (res) => {
          console.log('get All Users', res);
          this.studData = res.Data[0];
          this.presentTheStud();
          console.log(this.studData);
          await this.api.updateStudent(this.studData).subscribe((res) => {
            console.log(res);

            //Today Absent
            this.present++;

            //setting stati data
            AppModule.tpresent = this.present;

            //disableing
            one.setAttribute('disabled', '');
            two.setAttribute('disabled', '');

            //Reinitilizing Chart
            this.chartInitilize();

            this.successMsg = "Data Added"
            this.flag2 = true;
          })


        });



      }
    }

    // this.profData.TDay = '19/06/2023';
    // console.log("professor Updated" + this.profData);
    // await this.api.updateProfessor(this.profData).subscribe((res) => {
    //   console.log(this.profData)
    //   console.log(res);
    // });

  }

  presentTheStud() {
    switch (this.profData.Course) {

      case "OOMD": ++this.studData.oomdTAd;
        ++this.studData.oomdAtt;
        return;

      case "CN": ++this.studData.cnTAt;
        ++this.studData.cnAtt;
        return;

      case "DM": ++this.studData.dmTAt;
        ++this.studData.dmAtt;
        return;

      case "DIP": ++this.studData.dipTAt;
        ++this.studData.dipAtt;
        return;

      case "ADS": ++this.studData.adsTAt;
        ++this.studData.adsAtt;
        return;
    }
  }

  async Absent(data: any, one: HTMLElement, two: HTMLElement) {


    if (!this.sdate) {
      alert("Please Select Date of Attendance")
    } else {

      //Date Print 
      if (this.flag) {
        console.log('same date old Data');
        one.setAttribute('disabled', '');
        two.setAttribute('disabled', '');

        alert("Todays attendance is Given wait for tommorow")


      } else {
        console.log(this.changeFormat(new Date()));

        //Setting Data
        await this.api.getStudent(data).subscribe(async (res) => {
          console.log('get All Users', res);
          this.studData = res.Data[0];
          this.absentTheStud();
          console.log(this.studData);

          await this.api.updateStudent(this.studData).subscribe((res) => {
            console.log(res);

            //Today Absent
            this.absent++;

            AppModule.tabsent = this.absent;

            //disableing
            one.setAttribute('disabled', '');
            two.setAttribute('disabled', '');

            //Reinitilizing Chart
            this.chartInitilize();
          })
        });



      }
    }



  }

  absentTheStud() {
    switch (this.profData.Course) {

      case "OOMD": ++this.studData.oomdTAd;
        return;

      case "CN": ++this.studData.cnTAt;
        return;

      case "DM": ++this.studData.dmTAt;
        return;

      case "DIP": ++this.studData.dipTAt;
        return;

      case "ADS": ++this.studData.adsTAt;
        return;
    }
  }

  pipe = new DatePipe('en-US');
  changeFormat(today: any) {
    let ChangedFormat = this.pipe.transform(today, 'dd/MM/YYYY');
    const changedDate = ChangedFormat;
    // console.log(changedDate);

    return changedDate;
  }


  dateSet(input: any) {
    this.sdate = input.value;
    console.log(this.sdate);

  this.dateRef=input;


    this.api.checkDate({
      date: this.sdate,
      Pid: this.Pid
    }).subscribe((res) => {
      console.log(res)
      if (res.Status === "False") {
        alert("'" + this.sdate + "' Date Attendance All Ready Avalable");
      }
    })
  }


  submitAtt() {
    if (this.readStudent.length === (this.present + this.absent)) {
      const data = {
        Pid: this.Pid,
        date: this.sdate,
        attendance: this.present
      }

      this.api.attendance(data).subscribe((res) => {
        console.log(res);
        if (res.Status === "True") {
          alert("Data Updated Succesfully")
          // this.route.navigate(['/phome/giveAttendance']);
          this.ngOnInit();


        } else {
          alert("Data Updation Failed!")
        }
      })

      let mydata = this.profData;
      mydata.TClass++;

      this.api.updateProfessor(mydata).subscribe((res) => {
        console.log(res);
      })

      this.present = 0;
      this.absent = 0
      this.chartInitilize();

      this.sdate = '';

      this.dateRef.value='';

      // this.element.setAttribute('value','');
      this.chartInitilize();
    } else {
      alert("Please give Attendance to all the students. '" + (this.readStudent.length - (this.present + this.absent)) + "' Students are left");
    }

  }

}
