import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NgserviceService } from "./../ngservice.service";
import { Country } from "./../country";
import {  Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})


export class ProductlistComponent implements OnInit {
  ELEMENT_DATA: Country[] = [];

  displayedColumns: string[] = ['id', 'country_name', 'action'];
  dataSource = new MatTableDataSource();


  constructor(
    private ngservice: NgserviceService,
    private router: Router) {
  }




  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.ngservice.getCountriesList().subscribe(data => {
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);
      this.dataSource.data = this.ELEMENT_DATA;
    });
  }

  async updateRow(id: number){
    console.log(id)
    this.router.navigate(['updatecountry', id]);
  }

  async deleteRow(id: number){
    this.ngservice.deleteCountry(id).subscribe( data => {
      console.log(data);
      if(data = "OK")
      alert("Deleted Successfully !");
      this.reloadData();
    })

  }

  async addRow(){
    this.router.navigate(['addcountry']);
  }
}
