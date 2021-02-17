import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})


export class AddproductComponent implements OnInit {



  constructor( public http:HttpClient ) { }

  ngOnInit(): void {
  }



 
  

}
