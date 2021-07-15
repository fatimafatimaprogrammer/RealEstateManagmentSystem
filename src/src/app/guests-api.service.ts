import { property } from './property';
import { loginInfo } from './loginInfo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';
import { assignedproperty } from './assignedproperty';
import { tours_book } from './tours_book';
import { see_tours } from './see_tours';
import { tourprice } from './tourprice';
import { tourUnbook } from './tourUnbook';
import { assignAgent } from './assignAgent';
import { addedAgents } from './addedAgents';
import { Agent } from './banagent';
import { BuyersoldComponent } from './buyersold/buyersold.component';
import { sold } from './sold';
@Injectable({
  providedIn: 'root'
})
export class GuestsApiService {

  constructor(private httpClient : HttpClient) { }

  

  addAgent(agent : assignAgent) : Observable<assignAgent>{
    console.log('agentassign data', assignAgent);
    return this.httpClient.post<assignAgent>('http://localhost/addAgent.php' , agent);
  }

  readUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost/readUsers%20(1).php");
  }

  createUsers(user : User) : Observable<User>{
    console.log('user data', user)
    return this.httpClient.post<User>('http://localhost/registerUser%20(1).php' , user);
  }

  
  readBidCost() : Observable<tourprice[]>{
    return this.httpClient.get<tourprice[]>("http://localhost/tour_cost.php");
  }

  readTours() : Observable<see_tours[]>{
    return this.httpClient.get<see_tours[]>("http://localhost/ViewToursBooked.php");
  }

  bookTour(user : tours_book) : Observable<tours_book>{
    console.log('user data', user)
    return this.httpClient.post<tours_book>('http://localhost/book_tour.php' , user);
  }

  loginUsers(logininfo : loginInfo) : Observable<loginInfo>{
    return this.httpClient.post<loginInfo>('http://localhost/loginUsers.php', logininfo );
  }
  

  deleteUser(U_id: any) {
    return this.httpClient.delete(`http://localhost/delete%20(1)%20(new).php?U_id=${U_id}`);
  }

  
  deleteTourBooked(P_id: any) {
    return this.httpClient.delete(`http://localhost/unbookTour.php?P_id=${P_id}`);
  }

  readProperties() : Observable<property[]>{
    return this.httpClient.get<property[]>("http://localhost/readProperty.php");
  }

  readAssignProperty() : Observable<assignedproperty[]>{
    return this.httpClient.get<assignedproperty[]>("http://localhost/assignuser.php");
  }

  
  readUB() : Observable<tourUnbook[]>{
    return this.httpClient.get<tourUnbook[]>("http://localhost/readunbookBuyer.php");
  }

  createProperties(myproperty : property) : Observable<property>{
    console.log('property data', myproperty);
    return this.httpClient.post<property>('http://localhost/addProperty.php' , myproperty);
  }

  deleteProperty(P_id: any) {
    return this.httpClient.delete(`http://localhost/deleteProperty.php?P_id=${P_id}`);
  }
  
  readUsersAgents() : Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost/readUsersAgents.php");
  }

   readPropertiesAgents() : Observable<addedAgents[]>{
    return this.httpClient.get<addedAgents[]>("http://localhost/checkAddedAgents.php");
  }

   editProperties(myproperty : property): Observable<property>{
    console.log('property data edited ', myproperty);
    return this.httpClient.post<property>('http://localhost/editProperty.php' , myproperty);
   }

   banAgent(): Observable<Agent[]>{
    return this.httpClient.get<Agent[]>("http://localhost/banagent.php");
  }

  ban(U_id: any) {
    return this.httpClient.post('http://localhost/ban.php', {U_id: U_id});
  }

  fetchsold() : Observable<sold[]>{
    return this.httpClient.get<sold[]>("http://localhost/fetchsold.php");
  }

  deletesold(P_Id: any) {
    return this.httpClient.delete(`http://localhost/deletesold.php?P_Id=${P_Id}`);
  }
}
