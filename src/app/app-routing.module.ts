import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './home/container/container.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import { AceuilComponent } from './home/container/aceuil/aceuil.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'pm',
      component: PmComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },

  {
      path: '**',
      component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
