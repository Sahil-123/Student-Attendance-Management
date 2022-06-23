import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../api.service';
import {Router} from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-plogin',
  templateUrl: './plogin.component.html',
  styleUrls: ['./plogin.component.css']
})
export class PloginComponent implements OnInit {

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
    this.api.logIn(this.stform.value).subscribe((res)=>{
      console.log(res);
      this.msg=res.message;
      if(this.msg==='True'){
        this.msg='';
        AppModule.pid=this.stform.value.username;
        this.route.navigate(['/prof']);
      }else{
        alert("Invalid Username or Password!...")
      }
      console.log(this.msg);
    })
  }

}



