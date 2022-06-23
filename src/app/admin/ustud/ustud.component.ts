import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/api.service';


@Component({
  selector: 'app-ustud',
  templateUrl: './ustud.component.html',
  styleUrls: ['./ustud.component.css']
})
export class UstudComponent implements OnInit {
  // userForm!:FormGroup;
  errMsf: any;
  successMsg: any;
  getparamid: any;
  data: any;

  constructor(private api: ApiserviceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.router.snapshot.paramMap.get('id')){
      this.getparamid = this.router.snapshot.paramMap.get('id');
      this.api.getStudent(this.getparamid).subscribe((ress) => {
        console.log(ress.Data[0]);
        let d=ress.Data[0];

          this.userForm.patchValue({
            usn: d.usn,
            name: d.name,
            DOB: d.DOB,
            sem: d.sem,
            oomdAtt: d.oomdAtt,
            oomdTAd: d.oomdTAd,
          
            cnAtt: d.cnAtt,
            cnTAt: d.cnTAt,
            
            dipAtt: d.dipAtt,
            dipTAt: d.dipTAt,
            dmAtt: d.dmAtt,
            dmTAt: d.dmTAt,
            adsAtt: d.adsAtt,
            adsTAt: d.adsTAt,
            dept: d.dept,
           
          });
      })
    }

  }


  userForm = new FormGroup({
    "usn": new FormControl('', Validators.required),
    "name": new FormControl('', Validators.required),
    "DOB": new FormControl('', Validators.required),
    "sem": new FormControl('', Validators.required),
    "oomdAtt": new FormControl('', Validators.required),
    "oomdTAd": new FormControl('', Validators.required),
    "cnAtt": new FormControl('', Validators.required),
    "cnTAt": new FormControl('', Validators.required),
    "dipAtt": new FormControl('', Validators.required),
    "dipTAt": new FormControl('', Validators.required),
    "dmAtt": new FormControl('', Validators.required),
    "dmTAt": new FormControl('', Validators.required),
    "adsAtt": new FormControl('', Validators.required),
    "adsTAt": new FormControl('', Validators.required),
    "dept": new FormControl('', Validators.required),

  })

  Submit() {
    console.log(this.userForm.value);

    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.api.updateStudent(this.userForm.value).subscribe((res) => {
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
