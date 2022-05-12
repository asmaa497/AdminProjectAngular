import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Admin } from 'src/app/ViewModels/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin:Admin={} as Admin
  UserName:string="";
  password:string="";
  constructor(private AuthSer:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.AuthSer.Login(this.UserName,this.password).subscribe(tkn=>{
         localStorage.setItem("token",tkn.token);
         console.log("local storage  "+localStorage.getItem("token"))
         this.router.navigate(['/Pro/Products'])
         
    },(error)=>{
      alert("User name or passwors is incorrect");
    });
  }

}
