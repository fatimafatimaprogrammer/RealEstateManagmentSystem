import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestsApiService } from '../guests-api.service';
import { User } from '../user';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  showmenu=true;
  users : User[];
  showTables=false;

  constructor(private guestapiservice : GuestsApiService , private router: Router) {
    this.users=[];
   }

  ngOnInit(): void {
   }

seeUser() 
{
  this.router.navigateByUrl('/register'); 
} 

BanAgent()
{
  this.router.navigateByUrl('/ban-agent'); 
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

AssignAgent(){
  this.router.navigateByUrl('/task3');
}

}
