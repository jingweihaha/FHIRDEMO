import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
// MDB Angular Pro
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  patient_detail: any;
  //patient_obj:any;
  id: any;
  name: any;
  gender: any;
  dob: any;


  constructor(private zone: NgZone, private service: SharedService, private router: Router, private cd: ChangeDetectorRef) {
    if (this.service.patient_detail) {
      this.patient_detail = this.service.patient_detail;
       //console.log("patient_detail is ", this.patient_detail);
      this.id = this.patient_detail.id;
      this.name = this.patient_detail.name;
      this.gender = this.patient_detail.gender;
      this.dob = this.patient_detail.birthDate;
      this.cd.markForCheck();
    }
  }

  ngOnInit() {


  }

  goBack() {
    this.router.navigate(['/patient']);
  }

}
