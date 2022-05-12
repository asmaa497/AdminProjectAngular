import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'', component:LayoutComponent,children:[
    {path:'',  redirectTo:'/login', pathMatch:'full'},
    {path:'upload', component:UploadComponent}, 
    {path:'register', component:RegisterComponent,canActivate:[AuthGuard]},
    {path:'users', component:AllUsersComponent,canActivate:[AuthGuard]},
     
    {
      path: 'Pro',
      loadChildren: () => import('src/app/components/product-mod/product-mod.module').then(m => m.ProductModModule)
    },

  ]},
  {path:'login', component:LoginComponent},
  //{path:'layout', component:LayoutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
