import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestsApiService } from '../guests-api.service';

@Component({
  selector: 'app-sellerpage',
  templateUrl: './sellerpage.component.html',
  styleUrls: ['./sellerpage.component.css']
})
export class SellerpageComponent implements OnInit {

  
  constructor(private guestapiservice : GuestsApiService ,private router: Router) {
     }
  ngOnInit(): void {
  }

  
signOut()
{
  alert('You have logged out Successfully');
  this.router.navigateByUrl('/login'); 
}

seeProperty()
{
  this.router.navigateByUrl('/properties'); 
}

addProperty()
{
  this.router.navigateByUrl('/properties'); 
}

AssignAgent(){
  this.router.navigateByUrl('/task3');
}


}
