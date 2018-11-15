import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { SigninComponent } from '../components/signin/signin.component';

@NgModule({
  declarations: [
    AuthTabsComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [
    AuthTabsComponent,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
