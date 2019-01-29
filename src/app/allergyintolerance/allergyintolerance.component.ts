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
    //debugger;
    if (this.service.allergyIntolerance) {
      //debugger;
      let tmp_allergyIntolerance = this.service.allergyIntolerance["entry"];
      console.log(tmp_allergyIntolerance);

      if (tmp_allergyIntolerance) {
        for (let i = 0; i < tmp_allergyIntolerance.length; i++) {
          //debugger;
          let obj = {};
          try {
            let type = tmp_allergyIntolerance[i]["resource"]["status"];
            let text = type["text"];
            console.log("text is ", text);
            obj["status"] = text != null ? text : "N/A";
          } catch (error) {
            obj["status"] = "N/A";
          }

          let clinicalStatus;
          let display;
          let reaction;

          debugger;
          try {
            if (tmp_allergyIntolerance[i]["resource"]["clinicalStatus"]) {
              clinicalStatus = tmp_allergyIntolerance[i]["resource"]["clinicalStatus"];
              console.log("clinicalStatus is", clinicalStatus);
            }
            console.log("clinicalStatus is ", clinicalStatus);
            obj["clinicalStatus"] = clinicalStatus != null ? clinicalStatus : "N/A";
            console.log("reaction of loop allergyIntolerance component");
          } catch (error) {
            obj["clinicalStatus"] = "N/A";
          }

          try {
            if (tmp_allergyIntolerance[i]["resource"]["display"]) {
              display = tmp_allergyIntolerance[i]["resource"]["display"];
              console.log("display is", display);
            }
            obj["display"] = display != null ? display : "N/A";
            console.log("display is", display);
            console.log("display of loop allergyIntolerance component");
          } catch (error) {
            obj["display"] = "N/A";
          }

          try {
            if (tmp_allergyIntolerance[i]["resource"]["reaction"]) {
              reaction = tmp_allergyIntolerance[i]["resource"]["reaction"];
            }
            obj["reaction"] = reaction != null ? reaction : "N/A";
            console.log("reaction is", reaction);
            console.log("reaction of loop allergyIntolerance component");
          } catch (error) {
            obj["reaction"] = "N/A";
          }
          debugger;
          this.allergyIntolerance.push(obj);
        }

        console.log("allergyIntolerance is allergyIntolerance component ", tmp_allergyIntolerance);
        this.cd.markForCheck();
        debugger;
        this.displayedColumns = ["status", "clinicalStatus", "display", "reaction"];
        this.dataSource = new MatTableDataSource<{}>(this.allergyIntolerance);
      }
    }
  }

  ngOnInit() {

  }

}
