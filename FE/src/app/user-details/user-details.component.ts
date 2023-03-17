import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  user: any = { name: null, age: null};
  id: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(){ 

    this.id = this.route.snapshot.paramMap?.get("id");

    // get an item details by id
    if(this.id){
      this.userService.getDataById(this.id).subscribe((result)=>{
        this.user = result; 
      })
    }
  
  } 
  
  // add a new item
  postData(){
    this.userService.postData(this.user).subscribe((result)=>{
      console.log(result);
      this.toastr.success('Successfully new item added!');
      this.router.navigateByUrl('/users/list');
    })
  }

  // update an item
  updateData(){
    this.userService.updateData(this.user, this.id).subscribe((result)=>{
      this.toastr.info(`Successfully ${this.user.name} has been Updated!`);
      this.router.navigateByUrl('/users/list');
    })
  }

  onSubmit(){
    this.id ? this.updateData(): this.postData();
  }

}
