
import { Component, OnInit } from '@angular/core';
import { property } from './../property';
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties : property[];
  selectedProperty : property ={P_id:0, Title : " " , Address: "", Price: 0 , Is_sold :false};
  show=false;
  show1=false;
  message : string;
  showTables=true;

  constructor(private guestapiservice : GuestsApiService ,private router: Router) {
    this.properties=[];
    this.message="";
   }

  ngOnInit(): void {
     this.fetchAllProperties();

  }

  showform()
  {
    this.show=true;
    this.showTables=false;
    this.show1=false;
  }
  showform1()
  {
    this.show1=true;
    this.showTables=false;
    this.show=false;
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

  //deleting users temporarily
  deleteProperty (P_id:any) {
    if(confirm('Are you sure you want to delete this Property? ')){

      this.guestapiservice.deleteProperty(P_id).subscribe((res)=>{
        console.log(res);

      })
      this.fetchAllProperties();
    }
  }

  availableAgent(){
  this.router.navigateByUrl('/agent');
  }

  EditProperty(form: {value:property;}){
    this.guestapiservice.editProperties(this.selectedProperty).subscribe((myproperty: property)=>{
    console.log("Property edited",myproperty);
    this.showTables=true;
    this.show=false;
    this.show1= true;
    this.fetchAllProperties();
  });
}

  goBack()
  {
    this.show=false;
    this.showTables=true;
  this.show1=false;
  }

  goBackToAdminPage()
  {
    this.router.navigateByUrl('/admin');
  }

}
