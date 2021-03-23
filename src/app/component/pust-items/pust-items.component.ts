import { Component, OnInit } from '@angular/core';
import { OptServiceService } from 'src/app/service/opt-service.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-pust-items',
  templateUrl: './pust-items.component.html',
  styleUrls: ['./pust-items.component.css']
})
export class PustItemsComponent implements OnInit {

  productForm: FormGroup;
  constructor(private serviceApi:OptServiceService,private fb:FormBuilder) { 
    this.productForm = this.fb.group({
      store: '',
      items: this.fb.array([]) ,
    });
  }
  quantities() : FormArray {
    return this.productForm.get("items") as FormArray
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      storeitemId: '',
      count: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
  pushItems() {
    console.log(this.productForm.value);
    this.serviceApi.updateData("/customer/cart/push",this.productForm.value).subscribe(
      (response:any)=>{
        console.log(response);
        this.serviceApi.showSuccess(response.message,"")
      },(error)=>{
        this.serviceApi.showError(error.error.message,"")
      }
    );
  }


  ngOnInit(): void {
  }

}
