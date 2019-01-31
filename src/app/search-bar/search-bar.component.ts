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
    
    //public flag = true;
    //public ds = [];
    this.service.patient_detail = null;
    this.service.medicationstatement = null;
    this.service.encounter = null;
    this.service.condition = null;
    this.service.procedure = null;
    this.service.appointment = null;
    this.service.allergyIntolerance = null;

    let params = new HttpParams().set('name', this.patient_name).set('_pretty', 'true');
    this.http.get('http://hapi.fhir.org/baseDstu3/Patient', { params: params }).subscribe(res => {
      this.getDataSourceFromEntry(res["entry"]);
      this.service.ds_detector.next({ "ds_detector": "changed" });
      this.router.navigate(["/patient"]);
    },
      err => {
      },
      () => {
      })
  }
  getDataSourceFromEntry(entry): any {
    for (let i = 0; i < entry.length; i++) {
      let patient = {};
      patient["index"] = i+"";
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
