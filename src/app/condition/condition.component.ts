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
    if (this.service.condition) {
      //debugger;
      let tmp_condition = this.service.condition["entry"];
      if(tmp_condition)
      {
        for (let i = 0; i < tmp_condition.length; i++) {
          let obj = {};
          try {

            let condition = tmp_condition[i]["resource"]["code"]["text"];
            //console.log("condition is ", condition);
            let type = tmp_condition[i]["resource"]["severity"];
            let text = type["text"];
            
            obj["condition"] = condition;
            obj["severity"] = text!= null?text:"N/A";
          } catch (error) {
            obj["severity"] = "N/A";
          }

          let onset;
          let abatement;
          let clinicalstatus;
          try {
            if (tmp_condition[i]["resource"]["onsetDateTime"]) {
              onset = tmp_condition[i]["resource"]["onsetDateTime"];
            }
            obj["onset"] = onset!= null?onset:"N/A";
          } catch (error) {
            obj["onset"] = "N/A";
          }
          try {
            if (tmp_condition[i]["resource"]["abatementDatetime"]) {
              abatement = tmp_condition[i]["resource"]["abatementDatetime"];
            }
            obj["abatement"] = abatement!= null?abatement:"N/A";
          } catch (error) {
            obj["abatement"] = "N/A";
          }

          try {
            if (tmp_condition[i]["resource"]["clinicalStatus"]) {
              clinicalstatus = tmp_condition[i]["resource"]["clinicalStatus"];
            }
            obj["clinicalstatus"] = clinicalstatus!= null?clinicalstatus:"N/A";
          } catch (error) {
            obj["clinicalstatus"] = "N/A";
          }
          this.condition.push(obj);
        }
        this.cd.markForCheck();
        this.displayedColumns = ["condition", "severity", "onset", "clinicalstatus"];
        this.dataSource = new MatTableDataSource<{}>(this.condition);
      }
    }
  }

  ngOnInit() {

  }

}
