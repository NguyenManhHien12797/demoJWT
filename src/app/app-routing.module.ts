import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PostComponent} from "./post/post.component";
import {AuthGuardGuard} from "./service/auth-guard.guard";

const routes: Routes= [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuardGuard]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
