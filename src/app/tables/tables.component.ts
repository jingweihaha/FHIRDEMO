import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  banner : Observable<any>|null;

  constructor(private service: SharedService, private ref: ChangeDetectorRef) {

    this.service.banner_msg.subscribe(res => {
      //debugger;
      console.log("res is " ,res);
      this.banner = of(this.service.banner["name"]);
      this.service.banner["name"];
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
