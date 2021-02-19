import { ActivatedRoute, Router } from '@angular/router';
import { Country } from './../country';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';




@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})


export class AddproductComponent implements OnInit {
 
  
  //country : Country = new Country();
  constructor( public http:HttpClient,
    private formBuilder: FormBuilder,
    private ngservice: NgserviceService,
    private router:Router,
     ) { 
      
    }

    public loginForm: FormGroup = new FormGroup({
      country_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });

  ngOnInit(): void {
     
  }  

  submit(value:any){
    console.log("hii");
    console.log(value.country_name);
    this.ngservice.createCountry(value).subscribe( data =>{
      console.log(data);
      this.router.navigate(['countries']);
    
    },
    error => console.log(error));
  }


 
  

}
