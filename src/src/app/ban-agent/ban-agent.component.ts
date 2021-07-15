import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';
import {Agent} from "../banagent";

@Component({
  selector: 'app-ban-agent',
  templateUrl: './ban-agent.component.html',
  styleUrls: ['./ban-agent.component.css']
})
export class BanAgentComponent implements OnInit {

  users : Agent[];
  selectedAgent : Agent ={U_id : 0 ,Name:"" , Username : " " , Password : "",Phone :0,Job:"", P_id: 0,Is_ban: false};
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
    this.guestapiservice.banAgent().subscribe((agents:Agent[])=>{
      this.users = agents;
      console.log(this.users);
  });
  }

  //deleting users temporarily 
  deleteUser (U_id : any) {
    if(confirm('Are you sure you want to ban this Agent? ')){
      
      this.guestapiservice.ban(U_id).subscribe((res)=>{
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