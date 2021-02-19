import { Country } from './../country';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from './../ngservice.service';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id!: number;
  counttry!: Country;
  name!: string;

  constructor(  public http:HttpClient,
    private formBuilder: FormBuilder,
    private ngservice: NgserviceService,
    private router:Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ngservice.getCountry(this.id).subscribe(data => {
      this.counttry = data;
      this.name = this.counttry.country_name;

      console.log(data);
    }, error => console.log(error));

    

  
  }

  public loginForm: FormGroup = new FormGroup({
    country_name: new FormControl(this.name, [Validators.required, Validators.maxLength(60)]),
  });

  submit(value:any){
    console.log("hii",value);
    this.ngservice.updateCountry(this.id, value).subscribe( data =>{
      this.router.navigate(['countries']);
    }
    , error => console.log(error));
  }



}
