import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/api.service';

@Component({
  selector: 'app-uprof',
  templateUrl: './uprof.component.html',
  styleUrls: ['./uprof.component.css']
})
export class UprofComponent implements OnInit {

  // userForm!:FormGroup;
  errMsf: any;
  successMsg: any;
  getparamid: any;
  data: any;

  constructor(private api: ApiserviceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.router.snapshot.paramMap.get('id')){
      this.getparamid = this.router.snapshot.paramMap.get('id');
      this.api.getProfessor(this.getparamid).subscribe((ress) => {
        console.log(ress.Data[0]);
        let d=ress.Data[0];

          this.userForm.patchValue({
            Pid: d.Pid,
            name: d.name,
            DOB: d.DOB,
            sem: d.sem,
            Dept: d.Dept,
            password:d.password,
            Course:d.Course,
            TClass:d.TClass
          });
      })
    }

  }


  userForm = new FormGroup({
    "Pid": new FormControl('', Validators.required),
    "name": new FormControl('', Validators.required),
    "DOB": new FormControl('', Validators.required),
    "sem": new FormControl('', Validators.required),
    "Dept": new FormControl('', Validators.required),

    "password": new FormControl('', Validators.required),
    "Course": new FormControl('', Validators.required),
    "TClass": new FormControl('', Validators.required)

  })

  Submit() {
    console.log(this.userForm.value);

    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.api.updateProfessor(this.userForm.value).subscribe((res) => {
        console.log(res, 'Data Added Successfuly.');
        this.userForm.reset();
        this.successMsg = "Data Added Successfuly";
      })
    } else {
      this.errMsf = "All Fields Are Required";
    }
  }

  clear() {
    this.errMsf = '';
    this.successMsg = '';
    console.log("jih")
  }

}
