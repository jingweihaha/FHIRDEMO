import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent {

  procedure =[];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;

  constructor(private service: SharedService) {
    ////debugger;
    if (this.service.procedure) {
      debugger;
      let tmp_procedure = this.service.procedure.entry;
 
      if(tmp_procedure && tmp_procedure.length>0){
      
        for (let i = 0; i < tmp_procedure.length; i++) {
          debugger;
          let obj = {};
          try {
            let dosage = tmp_procedure[i]["resource"]["dosage"][0];
            let text = dosage["text"];
            // ("text is ", text);
            obj["dosage"] = text;
          } catch (error) {
            obj["dosage"] = "N/A";
          }
          let med;
          try {
            if (tmp_procedure[i]["resource"]["medicationCodeableConcept"]) {
              med = tmp_procedure[i]["resource"]["medicationCodeableConcept"];
            }
            else if (tmp_procedure[i]["resource"]["medicationReference"]["display"]) {
              med = tmp_procedure[i]["resource"]["medicationReference"]["display"];
            }
            obj["med"] = med["text"];
          } catch (error) {
            obj["med"] = "N/A"
          }
          this.procedure.push(obj);
        }      
        this.displayedColumns = ["med", "dosage"];
        this.dataSource = new MatTableDataSource<{}>(this.procedure);
      }
    }
  }

  ngOnInit() {

  }

}
