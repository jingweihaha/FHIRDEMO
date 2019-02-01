import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TablesComponent implements OnInit {

  banner_name : Observable<any>|null;
  banner_id : Observable<any>|null;
  banner_dob : Observable<any>|null;

  constructor(private service: SharedService, private ref: ChangeDetectorRef) {

    this.service.banner_msg.subscribe(res => {
      //debugger;
      console.log("res is " ,res);
      this.banner_name = of(this.service.banner["name"]);
      this.banner_id = of(this.service.banner["id"]);
      this.banner_dob = of(this.service.banner["birthDate"]);
      // this.service.banner["name"];
    })
  }

  ngOnInit() {
  }

  onLinkClick(a: MatTabChangeEvent) {
    console.log('event => ', a);
    console.log('index => ', a.index);
    console.log('tab => ', a.tab);
  }

}
