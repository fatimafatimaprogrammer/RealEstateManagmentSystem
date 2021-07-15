import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PropertiesComponent } from './properties/properties.component';
import { RegisterComponent } from './register/register.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AgentpageComponent } from './agentpage/agentpage.component';
import { BuyerpageComponent } from './buyerpage/buyerpage.component';
import { SellerpageComponent } from './sellerpage/sellerpage.component';
import { FirstWebsiteScreenComponent } from './first-website-screen/first-website-screen.component';
import { AuserComponent } from './auser/auser.component';
import { Task3Componant } from './task3/task3.component';
import { Task3addedComponent } from './task3added/task3added.component';
import { BanAgentComponent } from './ban-agent/ban-agent.component';
import { BuyersoldComponent } from './buyersold/buyersold.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    PropertiesComponent,
    RegisterComponent,
    AdminpageComponent,
    AgentpageComponent,
    BuyerpageComponent,
    SellerpageComponent,
    FirstWebsiteScreenComponent,
    AuserComponent,
    Task3Componant,
    Task3addedComponent,
    BanAgentComponent,
    BuyersoldComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
