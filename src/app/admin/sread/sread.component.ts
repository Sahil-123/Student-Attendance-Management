import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/api.service';

@Component({
  selector: 'app-sread',
  templateUrl: './sread.component.html',
  styleUrls: ['./sread.component.css']
})
export class SreadComponent implements OnInit {

  successMsg:any;

  readStudent:any;

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    console.log("hi dsjkh")
    this.getAllData();
  }

  getAllData(){
    this.api.getAllStudents().subscribe((res)=>{
      console.log('get All Users',res);
      this.readStudent = res.Data;
    })
  }

  clear(){
    this.successMsg='';
  }

  deleteData(deleteUsn:any){
    this.api.deleteStudent(deleteUsn).subscribe((res)=>{
      console.log(res);
      this.successMsg=res.message;
      this.getAllData();
    })
    console.log(deleteUsn,'deleted');
  }

}
