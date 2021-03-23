import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './component/list-items/list-items.component';
import { OptComponent } from './component/opt/opt.component';
import { PustItemsComponent } from './component/pust-items/pust-items.component';
import { VerifyotpComponent } from './component/verifyotp/verifyotp.component';

const routes: Routes = [
  {path:"",redirectTo:'/otp', pathMatch:'full'},
  {path:'otp',component:OptComponent},
  {path:'verifyotp',component:VerifyotpComponent},
  {path:'push-items',component:PustItemsComponent},
  {path:'list-items',component:ListItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
