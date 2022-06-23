import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StudentManage';
  l1: any;
  l2: any;
  l3: any;

  ngOnInit(): void {
    this.l1 = document.getElementById("li1");
    this.l2 = document.getElementById("li2");
    this.l3 = document.getElementById("li3");

    //chart 
    // const ctx = document.getElementById('myChart');
    // const myChart = new Chart("myChart", {
    //   type: 'pie',
    //   data: {
    //     labels: [
    //       'Red',
    //       'Blue',
    //       'Yellow'
    //     ],
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [300, 50, 100],
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(54, 162, 235)',
    //         'rgb(255, 205, 86)'
    //       ],
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       xAxes: [{
    //         gridLines: {
    //            display: false
    //         }
    //      }],
    //       yAxes: [{
    //         ticks:{
    //           beginAtZero: true
    //         },
    //         gridLines: {
    //           display: false
    //        }
    //       }]
    //     }
    //   }
    // });


    const myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ["Present", "Absent"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["green", "red"],
          data: [60, 20]
        }]
      },
      options: {
        title: {
          display: true,
          text: ('Today student present Data ' + 60 / 80 * 100 + '% Attended')
        }
      }
    });


  }


  change(input: any) {
    if (input === 1) {
      this.l1.setAttribute('style', ` padding: 5px;
      background: rgb(47, 153, 234);
      color: aliceblue;
      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 1px 1px 1px;`);

      this.l2.setAttribute('style', "");
      this.l3.setAttribute('style', "");


    } else if (input === 2) {

      this.l2.setAttribute('style', ` padding: 5px;
    background: rgb(47, 153, 234);
    color: aliceblue;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 1px 1px 1px;`);

      this.l1.setAttribute('style', "");
      this.l3.setAttribute('style', "");

    } else {
      this.l3.setAttribute('style', ` padding: 5px;
      background: rgb(47, 153, 234);
      color: aliceblue;
      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 1px 1px 1px;`);

      this.l2.setAttribute('style', "");
      this.l1.setAttribute('style', "");
    }

  }

}
