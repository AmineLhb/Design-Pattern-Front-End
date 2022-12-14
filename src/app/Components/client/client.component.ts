import { ServiceService } from './../../Services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/Models/chef.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  name!:string;
  pizza!:string;
  restau!:string;
  chef!:string;

  chefs!: Array<Chef>;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    restau: new FormControl('', [Validators.required]),
    pizza: new FormControl('', [Validators.required]),
    chef: new FormControl('', [Validators.required]),


  });

  constructor(private serviceService:ServiceService , private router: Router) { }

  ngOnInit(): void {
    this.serviceService.getChefs().subscribe({
      next: (data) =>{
        console.log(data)
        this.chefs = data
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
   this.pizza =  this.myForm.get('pizza')?.value;
   this.restau = this.myForm.get('restau')?.value;
   this.chef = this.myForm.get('chef')?.value;

   formData.append('name', this.name);
   formData.append('restau', this.restau);
   formData.append('pizza', this.pizza);
   formData.append('chef', this.chef);



  console.log("Data ******************************* "+JSON.stringify(formData))
  this.serviceService.saveCommande(formData).subscribe(res => {
    console.log(res);
    alert('saved Successfully.');
  })
  this.router.navigate(['/chefs'])
  }

}
