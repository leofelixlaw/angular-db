import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[]=[];
  constructor(private userService: UserService){
  }

  ngOnInit(){
    this.userService.getAllData().subscribe((result)=>{
      this.users =  result;
      console.log(this.users)
    })
  }
}
