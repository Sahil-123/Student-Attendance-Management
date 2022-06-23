import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/api.service';

@Component({
  selector: 'app-pread',
  templateUrl: './pread.component.html',
  styleUrls: ['./pread.component.css']
})
export class PreadComponent implements OnInit {

  successMsg:any;

  readStudent:any;

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.api.getAllprofessors().subscribe((res)=>{
      console.log('get All Users',res);
      this.readStudent = res.Data;
    })
  }

  clear(){
    this.successMsg='';
  }

  deleteData(deleteUsn:any){
    this.api.deleteProfessor(deleteUsn).subscribe((res)=>{
      console.log(res);
      this.successMsg=res.message;
      this.getAllData();
    })
    console.log(deleteUsn,'deleted');
  }

}
