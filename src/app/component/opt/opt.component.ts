import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptServiceService } from 'src/app/service/opt-service.service';
@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css']
})
export class OptComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private serviceApi: OptServiceService,private _router:Router) {
    this.form = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      // mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
 
  }

  ngOnInit(): void {

  }
  get f() {
    return this.form.controls;
  }
  message:string="";
  verifiedMessage:boolean=false;
  mobileNumber:any="";
  sendOTP() {
    console.log(this.form.valid);
   
    this.serviceApi.postData("/auth/sendOtp", this.form.value).subscribe(
      (response:any) => {
        console.log(response)
        this.serviceApi.showSuccess("OTP sent successfully","")
        this._router.navigate(['/verifyotp'])
        this.verifiedMessage=true;
        this.mobileNumber=this.form.value.phone;
        localStorage.setItem("phone",this.mobileNumber)
        console.log(this.mobileNumber)
      }, (error) => {
        console.log(error)
      }
    );
  }
 

}
