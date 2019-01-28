import { Component, OnInit, ViewChild, ViewEncapsulation, NgZone, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription, Subject } from 'rxjs';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {

  ds = [];
  displayedColumns: any;
  dataSource: any;
  patient_table: any;

  constructor(private service: SharedService, private router: Router, private http: HttpClient) {
    console.log("patient component constructor");

    if (this.service.ds) {
      this.refreshDS();
    }


    this.service.ds_detactor.subscribe(res => {
      if (res["ds_detactor"]) {
        this.refreshDS();
      }
    })
    this.patient_table = false;
  }

  private refreshDS() {
    this.ds = this.service.ds;
    console.log("ds is,", this.ds);
    this.displayedColumns = ['id', 'name', 'gender', 'birthDate', "address"];
    this.dataSource = new MatTableDataSource<{}>(this.ds);
    this.patient_table = true;
  }

  ngOnInit() {

  }

  getRecord(a: any) {
    console.log("a is ", a);
    this.dataSource = null;

    let url = "http://hapi.fhir.org/baseDstu3/MedicationStatement";

    //?patient=1232911&_pretty=true

    let params = new HttpParams().set('patient', a.id).set('_pretty', 'true');

    this.http.get(url, { params: params }).subscribe(res => {
      //this.router.navigate(['/detail', {elem: JSON.stringify(a)}])
      //this.service.mysub.next({ "patient_detail": a })
      //this.service.patient_detail = a;
      //this.service.patient_detail = res;
      this.service.medicationstatement = res;
      this.router.navigate(['/medicationstatement']);
    }
    ,
    err => {
      console.log("patient component err is ", err);
    },
    () => {
      console.log("finally patient component");
    }
    )
  }
}


