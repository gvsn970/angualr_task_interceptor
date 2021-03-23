import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { OptServiceService } from 'src/app/service/opt-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  form1: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private serviceApi: OptServiceService,private _router: Router) {

    this.form1 = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      name: ['', [Validators.required]],
      otp: ['', [Validators.required]]
    })
  }

  mobileNumber: any = "";
  ngOnInit(): void {
    this.mobileNumber = localStorage.getItem("phone");
    console.log(this.mobileNumber)
  }
  get f1() {
    return this.form1.controls;
  }
  message: string = "";
  verifiedMessage: boolean = false;


  verifyOTP() {
    console.log(this.form1.value);
    this.serviceApi.postData("/auth/customer/verifyOtp", this.form1.value).subscribe(
      (response: any) => {
        console.log(response)
        this.message=response.message;
        this.serviceApi.showSuccess( this.message,"")
        console.log(response.data.token)
        localStorage.setItem("token",response.data.token);
        this._router.navigate(['/list-items'])
      }, (error) => {
      
        if(error.status == 400){
          console.log(error)
          this.message=error.error.message;
          this.serviceApi.showError("please try again",this.message)
        }
      }, () => { }
    );
  }

}
