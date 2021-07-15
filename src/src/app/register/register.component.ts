import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users : User[];
  selectedUser : User ={U_id:0 ,Name:"" , Username : " " , Password : "",Phone :0,Job:""};
  show=false;
  message : string;
  showTables=true;

  constructor(private guestapiservice : GuestsApiService ,private router: Router) {
    this.users=[];
    this.message="welcome you've successfully logged in";
   }

  ngOnInit(): void {
this.fetchAllUsers();

  }

  showform()
  {
    this.show=true;
    this.showTables=false;
  }

  fetchAllUsers(){
    this.guestapiservice.readUsers().subscribe((users:User[])=>{
      this.users=users;
      console.log(this.users);
  });
  }
  //registering new user
  registerUser(form: {value:User;}){
        this.guestapiservice.createUsers(form.value).subscribe((user: User)=>{
        console.log("User Registered",user);
        this.showTables=true;
        this.show=false;
        this.fetchAllUsers();
      });  
  }

  //deleting users temporarily 
  deleteUser (U_id:any) {
    if(confirm('Are you sure you want to delete this User? ')){
      
      this.guestapiservice.deleteUser(U_id).subscribe((res)=>{
        console.log(res);
        this.fetchAllUsers();
      })
      this.fetchAllUsers();
    }  
  }
    
  goBack()
  {
    this.showTables=true;
    this.show=false;
  }

  goBackToAdminPage()
  {
    this.router.navigateByUrl('/admin');
  }
  
  //deleting table permanently
  /*deleteUserPermanent(id:any){
    this.guestapiservice.deleteUsers(id.value).subscribe((user: User)=>{
      console.log("User Registered",user);
    });
  }*/
  
}