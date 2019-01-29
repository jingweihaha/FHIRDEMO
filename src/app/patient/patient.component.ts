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
  // patient_table: any;

  constructor(private service: SharedService, private router: Router, private http: HttpClient, private ref: ChangeDetectorRef) {
    console.log("patient component constructor");

    if ((this.service.ds) && (this.service.ds.length > 0)) {
      this.refreshDS();
    }


    this.service.ds_detector.subscribe(res => {
      if (res["ds_detector"]) {
        this.refreshDS();
      }
    })
    // this.patient_table = false;
  }

  private refreshDS() {
    // this.patient_table = true;
    this.ds = this.service.ds;
    console.log("ds is,", this.ds);
    this.displayedColumns = ['id', 'name', 'gender', 'birthDate', "address"];
    this.dataSource = new MatTableDataSource<{}>(this.ds);
    //this.ref.detectChanges();
  }

  ngOnInit() {

  }

  getRecord(a: any) {
    console.log("a is ", a);
    this.dataSource = null;

    let params = new HttpParams().set('patient', a.id).set('_pretty', 'true');

    let url_encounter = "http://hapi.fhir.org/baseDstu3/Encounter";
    this.http.get(url_encounter, { params: params }).subscribe(res => {
      //this.router.navigate(['/detail', {elem: JSON.stringify(a)}])
      //this.service.mysub.next({ "patient_detail": a })
      //this.service.patient_detail = a;
      //this.service.patient_detail = res;
      this.service.encounter = res;
      console.log("Encounter is ", res);
      //this.router.navigate(['/tables']);
    },
      err => {
        console.log("Encounter patient component err is ", err);
      },
      () => {
        console.log("Encounter finally patient component");
      }
    )


    let url_condition = "http://hapi.fhir.org/baseDstu3/Condition";
    this.http.get(url_condition, { params: params }).subscribe(res => {
      //this.router.navigate(['/detail', {elem: JSON.stringify(a)}])
      //this.service.mysub.next({ "patient_detail": a })
      //this.service.patient_detail = a;
      //this.service.patient_detail = res;
      this.service.condition = res;
      console.log("Condition is ", res);
      //this.router.navigate(['/tables']);
    },
      err => {
        console.log("Condition patient component err is ", err);
      },
      () => {
        console.log("Condition finally patient component");
      }
    )


    let url_procedure = "http://hapi.fhir.org/baseDstu3/Procedure";
    this.http.get(url_procedure, { params: params }).subscribe(res => {
      this.service.procedure = res;
      console.log("Procedure is ", res);
    },
      err => {
        console.log("Procedure patient component err is ", err);
      },
      () => {
        console.log("Procedure finally patient component");
      }
    )

    let url_appointment = "http://hapi.fhir.org/baseDstu3/Appointment";
    this.http.get(url_appointment, { params: params }).subscribe(res => {
      //this.router.navigate(['/detail', {elem: JSON.stringify(a)}])
      //this.service.mysub.next({ "patient_detail": a })
      //this.service.patient_detail = a;
      //this.service.patient_detail = res;
      this.service.appointment = res;
      console.log("Appointment is ", res);
      //this.router.navigate(['/tables']);
    },
      err => {
        console.log("Appointment patient component err is ", err);
      },
      () => {
        console.log("Appointment finally patient component");
      }
    )

    let url_AllergyIntolerance = "http://hapi.fhir.org/baseDstu3/AllergyIntolerance";
    this.http.get(url_AllergyIntolerance, { params: params }).subscribe(res => {
      //this.router.navigate(['/detail', {elem: JSON.stringify(a)}])
      //this.service.mysub.next({ "patient_detail": a })
      //this.service.patient_detail = a;
      //this.service.patient_detail = res;
      this.service.allergyIntolerance = res;
      console.log("AllergyIntolerance is ", res);
      //this.router.navigate(['/tables']);

    },
      err => {
        console.log("AllergyIntolerance patient component err is ", err);
      },
      () => {
        console.log("AllergyIntolerance finally patient component");
      }
    )

    let url = "http://hapi.fhir.org/baseDstu3/MedicationStatement";
    //?patient=1232911&_pretty=true
    this.http.get(url, { params: params }).subscribe(res => {
      //this.router.navigate(['/detail', {elem: JSON.stringify(a)}])
      //this.service.mysub.next({ "patient_detail": a })
      //this.service.patient_detail = a;
      //this.service.patient_detail = res;
      this.service.medicationstatement = res;
      console.log("medicationstatement is", res);
      //this.router.navigate(['/tables']);
    },
      err => {
        console.log("MedicationStatement patient component err is ", err);
      },
      () => {
        console.log("MedicationStatement finally patient component");
        this.router.navigate(['/tables']);
      }
    )



  }
}


