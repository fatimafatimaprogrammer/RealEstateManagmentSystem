import { Component, OnInit } from '@angular/core';
import { sold } from './../sold';
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyersold',
  templateUrl: './buyersold.component.html',
  styleUrls: ['./buyersold.component.css']
})
export class BuyersoldComponent implements OnInit {
  
  sold : sold[];
  selectedProperty : sold ={P_Id: 0, Title : " " , Address: "", Price: 0 , Is_sold :false};
  show=false;
  show1=false;
  message : string;
  showTables=true;

  constructor(private guestapiservice : GuestsApiService ,private router: Router) {
    this.sold=[];
    this.message="";
   }

  ngOnInit(): void {
    this.fetchsold();
  }

  fetchsold(){
    this.guestapiservice.fetchsold().subscribe((solds : sold[])=>{
      this.sold = solds;
      console.log(this.sold);
  });
  }

  //deleting users temporarily 
  deletesold (P_Id : any) {
    if(confirm('Are you sure you want to delete this? ')){
      
      this.guestapiservice.deletesold(P_Id).subscribe((res)=>{
        console.log(res);
        this.fetchsold();
      })
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
  
}
