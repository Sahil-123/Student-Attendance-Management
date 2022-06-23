import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent implements OnInit {

  msg: any;

  constructor(private api: ApiserviceService, private route: Router) { }

  ngOnInit(): void {
  }

  stform = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  })


  dummy = {
    password: "2022-06-02",
    username: "20cs11"
  }
  stSubmit() {
    // console.log("hi");
    console.log(this.stform.value);
    this.api.logInS(this.stform.value).subscribe((res) => {
      // this.api.logInS(this.dummy).subscribe((res) => {
      console.log(res);
      this.msg = res.message;
      if (this.msg === 'True') {
        this.msg = '';
        this.route.navigate(['/stud'], {
          state: res
        });
      } else {
        alert("Invalid USN or Birth Date!...")
      }
      console.log(this.msg);
    })
  }

}
