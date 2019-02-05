import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-allergyintolerance',
  templateUrl: './allergyintolerance.component.html',
  styleUrls: ['./allergyintolerance.component.css']
})
export class AllergyintoleranceComponent implements OnInit {

  allergyIntolerance = [];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;
  nodata: boolean;

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    if (this.service.allergyIntolerance) {
      let tmp_allergyIntolerance = this.service.allergyIntolerance["entry"];
      if (tmp_allergyIntolerance && tmp_allergyIntolerance.length > 0 ) {
        for (let i = 0; i < tmp_allergyIntolerance.length; i++) {
          let obj = {};

          let clinicalStatus;
          let display;
          let reaction;

          try {
            if (tmp_allergyIntolerance[i]["resource"]["clinicalStatus"]) {
              clinicalStatus = tmp_allergyIntolerance[i]["resource"]["clinicalStatus"];
            }
            obj["clinicalStatus"] = clinicalStatus != null ? clinicalStatus : "N/A";
          } catch (error) {
            obj["clinicalStatus"] = "N/A";
          }
          try {
            if (tmp_allergyIntolerance[i]["resource"]["code"]["coding"][0]["display"]) {
              display = tmp_allergyIntolerance[i]["resource"]["code"]["coding"][0]["display"];
            }
            obj["display"] = display != null ? display : "N/A";

          } catch (error) {
            obj["display"] = "N/A";
          }

          try {
            if (tmp_allergyIntolerance[i]["resource"]["reaction"][0]["manifestation"]) {
              reaction = tmp_allergyIntolerance[i]["resource"]["reaction"][0]["manifestation"];
            }
            let sb = "";
            for (let i = 0; i < reaction.length; i++) {
              sb+=reaction[i]["coding"][0]["display"] + " ";              
            }
            obj["reaction"] = sb != null ? sb : "N/A";
          } catch (error) {
            obj["reaction"] = "N/A";
          }
          this.allergyIntolerance.push(obj);
        }
        this.cd.markForCheck();
        this.displayedColumns = ["clinicalStatus", "display", "reaction"];
        this.dataSource = new MatTableDataSource<{}>(this.allergyIntolerance);
      }
      else{
        this.nodata = true;
      }
    }
  }

  ngOnInit() {

  }

}
