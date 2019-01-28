import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  title = 'FHIRdemo';

  constructor() { }

  ngOnInit() {
  }

}
