
import { addedAgents } from './../addedAgents';

import { assignAgent } from './../assignAgent';
import { Component, OnInit } from '@angular/core';
import { property } from './../property';
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task3added',
  templateUrl: './task3added.component.html',
  styleUrls: ['./task3added.component.css']
})
export class Task3addedComponent implements OnInit {
  properties : property[];
  addedAgents : addedAgents [];
  selectedProperty : property ={P_id:0, Title : " " , Address: "", Price: 0 , Is_sold :false};
  show=false;
  message : string;
  message1 :string;
  showTables=true;
  agentAdded =false;
  finalshow=false;

  selectedAgent : assignAgent ={P_id :0 , A_id :0};
  constructor(private guestapiservice : GuestsApiService ,private router: Router) {
    this.properties=[];
    this.addedAgents=[];
    this.message1 ="";
    this.message="";
   }

  ngOnInit(): void {
     this.fetchAllProperties();

  }

 
  showform()
  {
    this.show=true;
    this.showTables=false;
  }

  fetchAllProperties(){
    this.guestapiservice.readProperties().subscribe((myproperty:property[])=>{
      this.properties=myproperty;
      console.log(this.properties);
      console.log('data a gaya');
  });
  }


  //registering new user
  registerProperty(form: {value:property;}){
        this.guestapiservice.createProperties(this.selectedProperty).subscribe((myproperty: property)=>{
        console.log("Property Added",myproperty);
        this.showTables=true;
        this.show=false;
        this.fetchAllProperties();
      });
  }

  registerPropertyAgent(form: {value:assignAgent;}){
    this.guestapiservice.addAgent(this.selectedAgent).subscribe((agent: assignAgent)=>{
    console.log("Property AGENT Added",agent);

    this.agentAdded = true;
    this.showTables=true;
    this.show=false;
    this.router.navigateByUrl('/task3added');
    this.fetchAllProperties();
  });
}

  //deleting users temporarily
  deleteProperty (P_id:any) {
    if(confirm('Are you sure you want to delete this Property? ')){

      this.guestapiservice.deleteProperty(P_id).subscribe((res)=>{
        console.log(res);

      })
      this.fetchAllProperties();
    }
  }

  fetchAgents(){
    this.guestapiservice.readPropertiesAgents().subscribe((addedAgents:addedAgents[])=>{
      this.addedAgents=addedAgents;
      console.log(this.addedAgents);
      console.log('data agent add ho kar a gaya');
     // this.router.navigateByUrl('/task3show');
      this.finalshow = true;
      this.message1 = "you have sucessfully added agent to property";
  });
  }

  getAvailableAgents(){
    this.router.navigateByUrl('/auser');
  }

  goBack()
  {
    this.show=false;
    this.showTables=true;
  }

  goBackToAdminPage()
  {
    this.router.navigateByUrl('/admin');
  }

}
