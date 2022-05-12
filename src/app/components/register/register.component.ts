import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Admin } from 'src/app/ViewModels/admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 admin:Admin={} as Admin
 RegFormGroup:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) {

    this.RegFormGroup=fb.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")]],
      confirmPassword:[''],
    });
   }

  ngOnInit(): void {
  }
  saveProduct()
  {

  }
  get fullName() {
    return this.RegFormGroup.controls['fullName'];
  }
  get password() {
    return this.RegFormGroup.controls['password'];
  }
  get email() {
    return this.RegFormGroup.controls['email'];
  }

  get confirmPassword() {
    return this.RegFormGroup.controls['confirmPassword'];
  }
  Reg()
  {
    this.authService.Register(this.RegFormGroup.value).subscribe(dss=>{
      this.router.navigate(['/Pro/Products']);
    });
  }
}
