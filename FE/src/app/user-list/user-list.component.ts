import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  user: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.getAllUsersData();
  }

  // get all data 
  getAllUsersData(){
    this.userService.getAllData().subscribe((result)=>{
      this.user = result;
    })
  }

  // Delete user item
  deleteUser(id: any){
    this.userService.deleteData(id).subscribe((result) => {
      
    },
    (err: HttpErrorResponse) => {
      console.log(err.error.text);
      this.getAllUsersData(); // this is not the right place
    })
  }
}
