import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { User } from 'src/app/ViewModels/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  Users:User[]=[]
  constructor(private AdminSer:AdminService) { }

  ngOnInit(): void {
    this.AdminSer.GatAllUsers().subscribe(U=>{
      console.log(JSON.stringify(U));
      this.Users=U;
    })
  }

}
