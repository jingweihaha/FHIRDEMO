import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  patient_name: string = "";

  constructor(private http: HttpClient, private service: SharedService, private router: Router) {

  }

  ngOnInit() {

  }


  searchPatientByName() {
    this.service.ds = [];

    let params = new HttpParams().set('name', this.patient_name).set('_pretty', 'true');

    // this.http.get('http://localhost:3001/api/patient', { params: params }).subscribe(res => {
    //    //console.log(res);
    //   //this.service.mysub.next({"ds":res});
    //   this.service.ds = res;     
    //   this.service.ds_detactor.next({"ds_detactor":"changed"});
    //    //console.log("res is "+ res + " service ds is " + this.service.ds + " searchbar component");
    //   this.router.navigate(["/patient"]);
    // },
    // err=>{
    //    //console.log(err);
    // },
    // () => {
    //    //console.log("finish search bar");
    // }
    // )
    this.http.get('http://hapi.fhir.org/baseDstu3/Patient', { params: params }).subscribe(res => {
       //console.log("search-bar res is ", res);

      this.getDataSourceFromEntry(res["entry"]);


      this.service.ds_detector.next({ "ds_detector": "changed" });
       //console.log("res is " + res + " service ds is " + this.service.ds + " searchbar component");
      this.router.navigate(["/patient"]);
    },
      err => {
         //console.log("search-bar err is ", err);
      },
      () => {
         //console.log("finally ()");
      })
  }
  getDataSourceFromEntry(entry): any {
    for (let i = 0; i < entry.length; i++) {
      //entry[i]
      let patient = {};
      patient["id"] = entry[i]["resource"]["id"];
      if (entry[i]["resource"]["name"]) {
        patient["name"] = entry[i]["resource"]["name"][0]["given"] + " " + entry[i]["resource"]["name"][0]["family"];
      }
      patient["gender"] = entry[i]["resource"]["gender"];
      patient["birthDate"] = entry[i]["resource"]["birthDate"];
      if (entry[i]["resource"]["address"]) {
        if(entry[i]["resource"]["address"][0]["line"])
        if (entry[i]["resource"]["address"][0]["line"][0])
          patient["address"] = entry[i]["resource"]["address"][0]["line"][0]
        if (entry[i]["resource"]["address"][0]["city"])
          patient["address"] += " " + entry[i]["resource"]["address"][0]["city"]
        if (entry[i]["resource"]["address"][0]["country"])
          patient["address"] += " " + entry[i]["resource"]["address"][0]["country"]
        if (entry[i]["resource"]["address"][0]["postalCode"])
          patient["address"] += " " + entry[i]["resource"]["address"][0]["postalCode"];
      }
      this.service.ds.push(patient);
    }
  }
}
