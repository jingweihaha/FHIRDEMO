import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLinkClick(a: MatTabChangeEvent) {
    console.log('event => ', a);
    console.log('index => ', a.index);
    console.log('tab => ', a.tab);
  }

}
