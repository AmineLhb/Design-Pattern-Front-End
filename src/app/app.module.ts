import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ClientComponent } from './Components/client/client.component';
import { ChefComponent } from './Components/chef/chef.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { Routes } from '@angular/router';


const routes:Routes=[
  {path : 'home',component:HomeComponent},
  {path : 'chef',component: ChefComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ChefComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
