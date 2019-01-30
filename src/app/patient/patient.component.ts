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

  constructor(private service: SharedService, private router: Router, private http: HttpClient, private ref: ChangeDetectorRef) {
    if ((this.service.ds) && (this.service.ds.length > 0)) {
      this.refreshDS();
    }

    this.service.ds_detector.subscribe(res => {
      if (res["ds_detector"]) {
        this.refreshDS();
      }
    })
  }

  private refreshDS() {
    this.ds = this.service.ds;
    this.displayedColumns = ['id', 'name', 'gender', 'birthDate', "address"];
    this.dataSource = new MatTableDataSource<{}>(this.ds);
  }

  ngOnInit() {

  }

  getRecord(a: any) {
    this.dataSource = null;
    let params = new HttpParams().set('patient', a.id).set('_pretty', 'true');
    let url_encounter = "http://hapi.fhir.org/baseDstu3/Encounter";
    this.http.get(url_encounter, { params: params }).subscribe(res => {
      this.service.encounter = res;
    },
      err => {
      },
      () => {
      }
    )


    let url_condition = "http://hapi.fhir.org/baseDstu3/Condition";
    this.http.get(url_condition, { params: params }).subscribe(res => {
      this.service.condition = res;
    },
      err => {
      },
      () => {
      }
    )


    let url_procedure = "http://hapi.fhir.org/baseDstu3/Procedure";
    this.http.get(url_procedure, { params: params }).subscribe(res => {
      this.service.procedure = res;
    },
      err => {
      },
      () => {
      }
    )

    let url_appointment = "http://hapi.fhir.org/baseDstu3/Appointment";
    this.http.get(url_appointment, { params: params }).subscribe(res => {
      this.service.appointment = res;
    },
      err => {
      },
      () => {
      }
    )

    let url_AllergyIntolerance = "http://hapi.fhir.org/baseDstu3/AllergyIntolerance";
    this.http.get(url_AllergyIntolerance, { params: params }).subscribe(res => {
      this.service.allergyIntolerance = res;
    },
      err => {
      },
      () => {
      }
    )

    let url = "http://hapi.fhir.org/baseDstu3/MedicationStatement";
    this.http.get(url, { params: params }).subscribe(res => {
      this.service.medicationstatement = res;
    },
      err => {
      },
      () => {
        this.router.navigate(['/tables']);
      }
    )



  }
}


