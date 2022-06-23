import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  // stform!: FormGroup;
  msg:any;

  constructor(private api:ApiserviceService,private route:Router) { }

  ngOnInit(): void {
  }

  stform = new FormGroup({
    'username':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  })
  

  stSubmit(){
    // console.log("hi");
    console.log(this.stform.value);
    this.api.logInA(this.stform.value).subscribe((res)=>{
      console.log(res);
      this.msg=res.message;
      if(this.msg==='True'){
        this.msg='';
        this.route.navigate(['/ahome'],{
          state:res
        });
      }else{
        alert("Invalid Username or Password!...")
      }
      console.log(this.msg);
    })
  }


}
