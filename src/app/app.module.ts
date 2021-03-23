import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule,RequiredValidator}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptComponent } from './component/opt/opt.component';
import { ListItemsComponent } from './component/list-items/list-items.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { VerifyotpComponent } from './component/verifyotp/verifyotp.component'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorInterceptor } from './service/token-interceptor.interceptor';
import { PustItemsComponent } from './component/pust-items/pust-items.component';
@NgModule({
  declarations: [
    AppComponent,
    OptComponent,
    ListItemsComponent,
    VerifyotpComponent,
    PustItemsComponent
  ],   
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
