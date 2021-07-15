import { loginInfo } from './../loginInfo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user";

import { GuestsApiService } from '../guests-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message :string="";
  yes : boolean=false;
  users : User[];

  logininfo : loginInfo;
  constructor(private guestapiservice : GuestsApiService ,private router: Router) { 
    //this.message="welcome you've successfully logged in";
    this.users=[];
    this.logininfo=new loginInfo;
   }

  ngOnInit(): void {

  }

  login(){
      this.guestapiservice.loginUsers(this.logininfo).subscribe((logininfo: loginInfo )=>{
          console.log(logininfo);
          this.logininfo=logininfo;

      if(this.logininfo == null){
        alert('Invalid username , password or Job Title')
      }
      else{

      if(this.logininfo.Job=='Admin')
      {
        this.router.navigateByUrl('/admin');
      }
      else if(this.logininfo.Job=='Agent')
      {
        this.router.navigateByUrl('/agent');
      }
     else if(this.logininfo.Job=='buyer')
      {
        this.router.navigateByUrl('/buyer');
      }
     else if(this.logininfo.Job=='seller')
      {
        this.router.navigateByUrl('/seller');
      }

      }

    });
}

}
