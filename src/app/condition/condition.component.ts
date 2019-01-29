import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  condition =[];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    ////debugger;
    if (this.service.condition) {
      ////debugger;
      let tmp_condition = this.service.condition["entry"];
       //console.log(tmp_condition);

      if(tmp_condition)
      {
        for (let i = 0; i < tmp_condition.length; i++) {
          ////debugger;
          let obj = {};
          try {
            let type = tmp_condition[i]["resource"]["severity"];
            let text = type["text"];
             //console.log("text is ", text);
            obj["severity"] = text!= null?text:"N/A";
          } catch (error) {
            obj["severity"] = "N/A";
          }

          let onset;
          let abatement;
          let clinicalstatus;
          //debugger;
          try {
            if (tmp_condition[i]["resource"]["onsetDateTime"]) {
              onset = tmp_condition[i]["resource"]["onsetDateTime"];
               //console.log("onset is", onset);
            }
             //console.log("onset is ", onset);
            obj["onset"] = onset!= null?onset:"N/A";
             //console.log("end of loop condition component");
          } catch (error) {
            obj["onset"] = "N/A";
          }

          // "onsetDateTime": "1941-11-05T13:43:38-05:00",
          // "assertedDate": "1941-11-05T13:43:38-05:00"

          try {
            if (tmp_condition[i]["resource"]["abatementDatetime"]) {
              abatement = tmp_condition[i]["resource"]["abatementDatetime"];
               //console.log("abate is", abatement);
            }
            obj["abatement"] = abatement!= null?abatement:"N/A";
             //console.log("abatement is", abatement);
             //console.log("abatement of loop condition component");
          } catch (error) {
            obj["abatement"] = "N/A";
          }

          try {
            if (tmp_condition[i]["resource"]["clinicalStatus"]) {
              clinicalstatus = tmp_condition[i]["resource"]["clinicalStatus"];
            }
            obj["clinicalstatus"] = clinicalstatus!= null?clinicalstatus:"N/A";
             //console.log("clinicalstatus is", clinicalstatus);
             //console.log("clinicalstatus of loop condition component");
          } catch (error) {
            obj["clinicalstatus"] = "N/A";
          }
          //debugger;
          this.condition.push(obj);
        }

         //console.log("condition is condition component ", tmp_condition);
        this.cd.markForCheck();
        //debugger;  
        this.displayedColumns = ["severity", "onset", "abatement", "clinicalstatus"];
        this.dataSource = new MatTableDataSource<{}>(this.condition);
      }
    }
  }

  ngOnInit() {

  }

}
