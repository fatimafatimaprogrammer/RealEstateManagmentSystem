import { PropertiesComponent } from './properties/properties.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AgentpageComponent } from './agentpage/agentpage.component';
import { BuyerpageComponent } from './buyerpage/buyerpage.component';
import { SellerpageComponent } from './sellerpage/sellerpage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FirstWebsiteScreenComponent } from './first-website-screen/first-website-screen.component';
import { AuserComponent } from './auser/auser.component';
import { Task3addedComponent } from './task3added/task3added.component';
import { Task3Componant } from './task3/task3.component';
import { BanAgentComponent } from './ban-agent/ban-agent.component';
import { BuyersoldComponent } from './buyersold/buyersold.component';

const routes: Routes = [
  
  {path:'' , component: FirstWebsiteScreenComponent},
  {path:'login' , component: LoginComponent},
  {path:'welcome',component: WelcomeComponent},
  {path:'register',component: RegisterComponent},
  {path: 'properties',component: PropertiesComponent},
  {path: 'admin',component: AdminpageComponent},
  {path: 'agent',component: AgentpageComponent},
  {path: 'buyer',component: BuyerpageComponent},
  {path: 'seller',component: SellerpageComponent},
  {path: 'task3' , component: Task3Componant},
  {path: 'auser' , component:AuserComponent},
  {path: 'task3added' ,component:Task3addedComponent },
  {path: 'ban-agent' ,component:BanAgentComponent },
  {path: 'buyersold' ,component:BuyersoldComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
