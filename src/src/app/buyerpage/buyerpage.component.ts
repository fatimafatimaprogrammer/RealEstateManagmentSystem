import { Component, OnInit } from '@angular/core';
import { GuestsApiService } from '../guests-api.service';
import { Router } from '@angular/router';
import { tours_book } from '../tours_book';
import { see_tours } from '../see_tours';

@Component({
  selector: 'app-buyerpage',
  templateUrl: './buyerpage.component.html',
  styleUrls: ['./buyerpage.component.css']
})
export class BuyerpageComponent implements OnInit {
  showMenu=true;
  showTables=false;
  showTours=false;
  users : see_tours[];
  selectedUser : tours_book ={B_Id:0 , P_id:0 , A_id:0};

  constructor(private guestapiservice : GuestsApiService , private router: Router) {
    this.users=[];
  }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  
  fetchAllUsers(){
    this.guestapiservice.readTours().subscribe((users:see_tours[])=>{
      this.users=users;
      console.log(this.users);
  });
  }

  BookTour()
  {
    this.showMenu=false;
    this.showTables=true;
    this.showTours=false;
  }

  SeeTour()
  {

    this.showMenu=false;
    this.showTables=false;
    this.showTours=true;
  }

  deleteSold(){
    this.router.navigateByUrl('/buyersold'); 
  }

  goBack()
  {
   this.showTables=false;
   this.showMenu=true;
  this.showTours=false;
  }

//registering new user
registerUser(form: {value:tours_book;}){
  this.guestapiservice.bookTour(form.value).subscribe((user: tours_book)=>{
  console.log("User Registered",user);
  alert('Your Booking is Done successfully')
});  
}

signOut()
{
  alert('You have logged out Successfully');
  this.router.navigateByUrl('/login'); 
}
}
