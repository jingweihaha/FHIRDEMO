import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent {

  procedure = [];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;
  nodata: boolean;

  constructor(private service: SharedService) {
    ////debugger;

this.service.procedure_msg.subscribe(res => {
  if (this.service.procedure) {
    // debugger;
    let tmp_procedure = this.service.procedure.entry;
    if (tmp_procedure && tmp_procedure.length > 0) {
      this.nodata = false;
      for (let i = 0; i < tmp_procedure.length; i++) {
        // debugger;
        let obj = {};
        try {
          let start = tmp_procedure[i]["resource"]["performedPeriod"]["start"];
          obj["start"] = start;
        } catch (error) {
          obj["start"] = "N/A";
        }
        try {
          let end = tmp_procedure[i]["resource"]["performedPeriod"]["end"];
          obj["end"] = end;
        } catch (error) {
          obj["end"] = "N/A";
        }
        let reasonReference;
        try {
          if (tmp_procedure[i]["resource"]["reasonReference"]) {
            reasonReference = tmp_procedure[i]["resource"]["reasonReference"][0]["display"];
          }
          obj["reasonReference"] = reasonReference;
        } catch (error) {
          obj["reasonReference"] = "N/A"
        }
        let procedure;
        try {
          if (tmp_procedure[i]["resource"]["code"]) {
            procedure = tmp_procedure[i]["resource"]["code"]["text"];
          }
          obj["procedure"] = procedure;
        } catch (error) {
          obj["procedure"] = "N/A"
        }
        this.procedure.push(obj);
      }
      this.displayedColumns = ["start", "reasonReference", "procedure"];
      this.dataSource = new MatTableDataSource<{}>(this.procedure);
    }
    else {
      this.nodata = true;
    }
  }
})

    if (this.service.procedure) {
      // debugger;
      let tmp_procedure = this.service.procedure.entry;
      if (tmp_procedure && tmp_procedure.length > 0) {
        this.nodata = false;
        for (let i = 0; i < tmp_procedure.length; i++) {
          // debugger;
          let obj = {};
          try {
            let start = tmp_procedure[i]["resource"]["performedPeriod"]["start"];
            obj["start"] = start;
          } catch (error) {
            obj["start"] = "N/A";
          }
          try {
            let end = tmp_procedure[i]["resource"]["performedPeriod"]["end"];
            obj["end"] = end;
          } catch (error) {
            obj["end"] = "N/A";
          }
          let reasonReference;
          try {
            if (tmp_procedure[i]["resource"]["reasonReference"]) {
              reasonReference = tmp_procedure[i]["resource"]["reasonReference"][0]["display"];
            }
            obj["reasonReference"] = reasonReference;
          } catch (error) {
            obj["reasonReference"] = "N/A"
          }
          let procedure;
          try {
            if (tmp_procedure[i]["resource"]["code"]) {
              procedure = tmp_procedure[i]["resource"]["code"]["text"];
            }
            obj["procedure"] = procedure;
          } catch (error) {
            obj["procedure"] = "N/A"
          }
          this.procedure.push(obj);
        }
        this.displayedColumns = ["start", "reasonReference", "procedure"];
        this.dataSource = new MatTableDataSource<{}>(this.procedure);
      }
      else {
        this.nodata = true;
      }
    }
  }

  ngOnInit() {

  }

}
