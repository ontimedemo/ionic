import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    AuthServiceProvider
  ]
})
export class SignupPageModule {}
