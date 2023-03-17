import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit{
  user: any[] = [];
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(){
    this.getAllUsersData();
  }

  // get all data 
  getAllUsersData(){
    this.userService.getAllData().subscribe((result)=>{
      this.user = result;
      // this.toastr.success('Successfully List Loaded!!');
    })
  }

  // Delete user item
  deleteUser(id: any){
    this.userService.deleteData(id).subscribe((result) => {
      
    },
    (err: HttpErrorResponse) => {
      console.log(err.error.text);
      this.getAllUsersData(); // this is not the right place
      this.toastr.error(err.error.text);

    })
  }
}
