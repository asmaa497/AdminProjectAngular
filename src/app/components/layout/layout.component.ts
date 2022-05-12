import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private AuthSer:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.AuthSer.Logout();
    this.router.navigate(['/login']);
  }

}
