import { HomeComponent } from './Components/home/home.component';
import { ClientComponent } from './Components/client/client.component';
import { ChefComponent } from './Components/chef/chef.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'chefs', component: ChefComponent},
  {path:'commande', component: ClientComponent},
  {path:'home', component:HomeComponent },

  {path:'',
  redirectTo: '/home',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
