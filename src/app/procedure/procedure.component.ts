import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent {

  // procedure =[];
  // dataSource: MatTableDataSource<{}>;
  // displayedColumns: any;

  // constructor(private service: SharedService, private cd: ChangeDetectorRef) {
  //   //debugger;
  //   if (this.service.procedure) {
  //     //debugger;
  //     let tmp_procedure = this.service.procedure.entry;
  //     for (let i = 0; i < tmp_procedure.length; i++) {
  //       //debugger;
  //       let obj = {};
  //       try {
  //         let dosage = tmp_procedure[i]["resource"]["dosage"][0];
  //         let text = dosage["text"];
  //         //console.log("text is ", text);
  //         obj["dosage"] = text;
  //       } catch (error) {
  //         obj["dosage"] = "N/A";
  //       }
  //       let med;
  //       try {
  //         if (tmp_procedure[i]["resource"]["medicationCodeableConcept"]) {
  //           med = tmp_procedure[i]["resource"]["medicationCodeableConcept"];
  //         }
  //         else if (tmp_procedure[i]["resource"]["medicationReference"]["display"]) {
  //           med = tmp_procedure[i]["resource"]["medicationReference"]["display"];
  //         }
  //         //console.log("med is ", med);
  //         //console.log("end of loop medprocedureicationstatement component");
  //         obj["med"] = med["text"];
  //       } catch (error) {
  //         obj["med"] = "N/A"
  //       }
  //       this.medicationstatement.push(obj);
  //     }
  //     //console.log("medicationstatement is medicationstatement component ", tmp_medicationstatements);
  //     this.cd.markForCheck();
      
  //     //debugger;

  //     this.displayedColumns = ["med", "dosage"];
  //     this.dataSource = new MatTableDataSource<{}>(this.medicationstatement);
  //   }
  // }

  // ngOnInit() {

  // }

}
