import { Component, Input, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  user: any = []
  
  constructor(private userService: UserService) { }

  ngOnInit(){
    //  this.userService.postData({name: "leoooo", age: 30}).subscribe((result)=>{
    //   console.log(result)
    //  })
  }

  onSubmit(value: any){
    console.log(value);
  }
}
