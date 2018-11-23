import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './home/container/container.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {NavbarComponent} from './home/navbar/navbar.component';
const approute: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'nav', component: NavbarComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approute)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
