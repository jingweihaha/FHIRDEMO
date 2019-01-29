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

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    ////debugger;
    if (this.service.allergyIntolerance) {
      ////debugger;
      let tmp_allergyIntolerance = this.service.allergyIntolerance["entry"];
       //console.log(tmp_allergyIntolerance);

      if (tmp_allergyIntolerance) {
        for (let i = 0; i < tmp_allergyIntolerance.length; i++) {
          let obj = {};

          let clinicalStatus;
          let display;
          let reaction;

          try {
            if (tmp_allergyIntolerance[i]["resource"]["clinicalStatus"]) {
              clinicalStatus = tmp_allergyIntolerance[i]["resource"]["clinicalStatus"];
               //console.log("clinicalStatus is", clinicalStatus);
            }
             //console.log("clinicalStatus is ", clinicalStatus);
            obj["clinicalStatus"] = clinicalStatus != null ? clinicalStatus : "N/A";
             //console.log("reaction of loop allergyIntolerance component");
          } catch (error) {
            obj["clinicalStatus"] = "N/A";
          }

          try {
            if (tmp_allergyIntolerance[i]["resource"]["code"]["coding"][0]["display"]) {
              display = tmp_allergyIntolerance[i]["resource"]["code"]["coding"][0]["display"];
               //console.log("display is", display);
            }
            obj["display"] = display != null ? display : "N/A";
             //console.log("display is", display);
             //console.log("display of loop allergyIntolerance component");
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
              //debugger;
              console.log("sb is", sb);

            }
            obj["reaction"] = sb != null ? sb : "N/A";
             //console.log("reaction is", sb);
             //console.log("reaction of loop allergyIntolerance component");
          } catch (error) {
            obj["reaction"] = "N/A";
          }
          //debugger;
          this.allergyIntolerance.push(obj);
        }

         //console.log("allergyIntolerance is allergyIntolerance component ", tmp_allergyIntolerance);
        this.cd.markForCheck();
        //debugger;
        this.displayedColumns = ["clinicalStatus", "display", "reaction"];
        this.dataSource = new MatTableDataSource<{}>(this.allergyIntolerance);
      }
    }
  }

  ngOnInit() {

  }

}
