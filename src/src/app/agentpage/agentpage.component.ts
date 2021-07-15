import { Component, OnInit } from '@angular/core';
import { assignedproperty } from '../assignedproperty';
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';
import { tours_book } from '../tours_book';
import { tourprice } from '../tourprice';
import { tourUnbook } from '../tourUnbook';
@Component({
  selector: 'app-agentpage',
  templateUrl: './agentpage.component.html',
  styleUrls: ['./agentpage.component.css']
})
export class AgentpageComponent implements OnInit {
  showMenu=true;
  users : assignedproperty[];
  showUnbook=false;
  showTheCost=false;
  showTables=false;
  users1 : tours_book[];
  users2 : tourprice[];
  users3 :tourUnbook[];

  constructor(private guestapiservice : GuestsApiService , private router: Router) {
    this.users=[];
    this.users1=[];
    this.users2=[];
    this.users3=[];
  }

  ngOnInit(): void {
    this.fetchAllUsers();
    this.fetchAllUsersCost();
    this.fetchAllUnbook();
  }

  fetchAllUsers(){
    this.guestapiservice.readAssignProperty().subscribe((users:assignedproperty[])=>{
      this.users=users;
      console.log(this.users);
  });
}

fetchAllUsersCost(){
  this.guestapiservice.readBidCost().subscribe((users:tourprice[])=>{
    this.users2=users;
    console.log(this.users);
});
}

fetchAllUnbook(){
  this.guestapiservice.readUB().subscribe((users:tourUnbook[])=>{
    this.users3=users;
    console.log(this.users);
});
}


unbooking()
{
  this.showMenu=false;
  this.showTables=false;
  this.showUnbook=true;
}
seeToursAssigned()
{
this.showTables=true;
this.showUnbook=false;
this.showMenu=false;
}


goBack()
{
  this.showMenu=true;
  this.showUnbook=false;
  this.showTables=false;
  this.showTheCost=false;
}

seeCost()
{
  this.showMenu=false;
  this.showUnbook=false;
  this.showTables=false;
  this.showTheCost=true;
}

signOut()
{
  alert('You have logged out Successfully');
  this.router.navigateByUrl('/login'); 
}



//deleting users temporarily 
deleteTour (P_id:any) {
  if(confirm('Are you sure you want to delete this User? ')){
    
    this.guestapiservice.deleteTourBooked(P_id).subscribe((res)=>{
      console.log(res);
      
    })
    this.fetchAllUnbook();
  }  
}

}
