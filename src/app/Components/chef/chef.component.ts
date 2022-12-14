import { ServiceService } from './../../Services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/Models/chef.model';
import { Router } from '@angular/router';
import { Commande } from 'src/app/Models/Commande.model';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {


  name!:string;
  pwd!:string;

  chefs!: Array<Chef>;
  commandes!: Array<Commande>;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),

  });

  constructor(private serviceService : ServiceService, private router: Router) { }

  ngOnInit(): void {

    this.serviceService.getChefs().subscribe({
      next: (data) =>{
        console.log(data)
        this.chefs = data
        this.commandes = data.commandes
       },
       error: (err) =>{
         console.log(err)
       }

    })
  }

  get f(){
    return this.myForm.controls;
  }


  submit(){

    const formData = new FormData();

   this.name =  this.myForm.get('name')?.value;
   this.pwd =  this.myForm.get('pwd')?.value;


   formData.append('name', this.name);
   formData.append('pwd', this.pwd);


  console.log("Data ******************************* "+JSON.stringify(formData))
  this.serviceService.register(formData).subscribe(res => {
    console.log(res);
    alert('saved Successfully.');
    this.serviceService.getChefs().subscribe({
      next: (data) =>{
        console.log(data)
        this.chefs = data
       },
       error: (err) =>{
         console.log(err)
       }

    })
  })
  }

}
